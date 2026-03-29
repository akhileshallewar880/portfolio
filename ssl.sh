#!/bin/bash

# ─────────────────────────────────────────────────────────────
#  Add free HTTPS (Let's Encrypt) to portfolio on VPS
#  Prerequisites: domain portfolio.vantrade.in must point to
#  187.127.130.128 in your DNS before running this.
#  Run from your Mac: bash ssl.sh
# ─────────────────────────────────────────────────────────────

VPS_IP="187.127.130.128"
VPS_USER="root"
DOMAIN="portfolio.vantrade.in"
EMAIL="akhileshallewar880@gmail.com"

echo "▶ Installing certbot and obtaining SSL certificate for ${DOMAIN}..."

ssh -o StrictHostKeyChecking=no ${VPS_USER}@${VPS_IP} bash <<REMOTE
set -e

# Install certbot
apt-get install -y certbot python3-certbot-nginx -qq

# Obtain certificate and auto-configure nginx
certbot --nginx \
  -d ${DOMAIN} \
  --email ${EMAIL} \
  --agree-tos \
  --non-interactive \
  --redirect

echo "✓ SSL certificate installed. Site now live at https://${DOMAIN}"

# Auto-renewal is set up by certbot automatically via systemd timer
systemctl status certbot.timer 2>/dev/null || true
REMOTE
