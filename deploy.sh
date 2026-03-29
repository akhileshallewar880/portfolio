#!/bin/bash

# ─────────────────────────────────────────────────────────────
#  Portfolio Deployment Script — VPS 187.127.130.128
#  Run from your Mac: bash deploy.sh
# ─────────────────────────────────────────────────────────────

set -e  # Exit on any error

VPS_IP="187.127.130.128"
VPS_USER="root"
REMOTE_DIR="/var/www/portfolio"
NGINX_CONF="/etc/nginx/sites-available/portfolio"

GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

step() { echo -e "\n${BLUE}▶ $1${NC}"; }
ok()   { echo -e "${GREEN}✓ $1${NC}"; }
warn() { echo -e "${YELLOW}⚠ $1${NC}"; }

# ─── 1. Build Angular app locally ────────────────────────────
step "Building Angular app..."
npm run build -- --configuration=production
ok "Build complete → dist/portfolio-app/browser/"

# ─── 2. Prepare server ───────────────────────────────────────
step "Preparing VPS server..."

ssh -o StrictHostKeyChecking=no ${VPS_USER}@${VPS_IP} bash <<'REMOTE'
set -e

# Install nginx if not present
if ! command -v nginx &>/dev/null; then
  echo "Installing nginx..."
  apt-get update -qq && apt-get install -y nginx
fi

# Create web root
mkdir -p /var/www/portfolio

# Remove old code if present
rm -rf /var/www/portfolio/*

echo "Server ready."
REMOTE

ok "Server prepared"

# ─── 3. Upload build ─────────────────────────────────────────
step "Uploading build files..."
rsync -avz --delete \
  -e "ssh -o StrictHostKeyChecking=no" \
  dist/portfolio-app/browser/ \
  ${VPS_USER}@${VPS_IP}:${REMOTE_DIR}/
ok "Files uploaded"

# ─── 4. Configure nginx ──────────────────────────────────────
step "Configuring nginx..."

ssh -o StrictHostKeyChecking=no ${VPS_USER}@${VPS_IP} bash <<REMOTE
set -e

# Write nginx config
cat > ${NGINX_CONF} <<'NGINX'
server {
    listen 80;
    listen [::]:80;
    server_name 187.127.130.128 portfolio.vantrade.in;

    root /var/www/portfolio;
    index index.html;

    # Angular SPA — all routes fall back to index.html
    location / {
        try_files \$uri \$uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";
    add_header X-XSS-Protection "1; mode=block";

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript;
    gzip_min_length 1000;
}
NGINX

# Enable site
ln -sf ${NGINX_CONF} /etc/nginx/sites-enabled/portfolio

# Remove default site if present
rm -f /etc/nginx/sites-enabled/default

# Test & reload nginx
nginx -t
systemctl enable nginx
systemctl reload nginx

echo "Nginx configured and reloaded."
REMOTE

ok "Nginx configured"

# ─── 5. Done ─────────────────────────────────────────────────
echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}  ✓ Deployment complete!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "  ${BLUE}HTTP:${NC}   http://187.127.130.128"
echo -e "  ${BLUE}Domain:${NC} http://portfolio.vantrade.in"
echo ""
echo -e "${YELLOW}Tip: Run 'bash ssl.sh' to add HTTPS (free Let's Encrypt cert)${NC}"
echo ""
