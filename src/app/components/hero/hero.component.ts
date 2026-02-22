import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  constructor(private cdr: ChangeDetectorRef) {}

  roles = [
    'Scalable Web Applications',
    'Cloud-Native .NET Backends',
    'AI-Powered GenAI Systems',
    'Real-Time Angular Frontends',
    'Intelligent RAG Pipelines',
    'Enterprise Azure Solutions'
  ];

  displayText = '';
  currentRoleIndex = 0;
  currentCharIndex = 0;
  isDeleting = false;
  typingSpeed = 90;
  private typingTimer: any;
  private animationId: any;

  ngOnInit(): void {
    this.startTyping();
  }

  ngAfterViewInit(): void {
    this.initParticles();
  }

  ngOnDestroy(): void {
    clearTimeout(this.typingTimer);
    cancelAnimationFrame(this.animationId);
  }

  private startTyping(): void {
    const currentRole = this.roles[this.currentRoleIndex];

    if (!this.isDeleting) {
      this.displayText = currentRole.substring(0, this.currentCharIndex + 1);
      this.currentCharIndex++;

      if (this.currentCharIndex === currentRole.length) {
        this.typingSpeed = 2000;
        this.isDeleting = true;
      } else {
        this.typingSpeed = 90;
      }
    } else {
      this.displayText = currentRole.substring(0, this.currentCharIndex - 1);
      this.currentCharIndex--;
      this.typingSpeed = 45;

      if (this.currentCharIndex === 0) {
        this.isDeleting = false;
        this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
        this.typingSpeed = 300;
      }
    }

    this.cdr.detectChanges();
    this.typingTimer = setTimeout(() => this.startTyping(), this.typingSpeed);
  }

  private initParticles(): void {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d')!;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: Particle[] = Array.from({ length: 60 }, () => new Particle(canvas));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw(ctx);
      });
      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99,102,241,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });
      this.animationId = requestAnimationFrame(animate);
    };
    animate();
  }

  scrollToProjects(): void {
    const el = document.getElementById('projects');
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
  }

  scrollToContact(): void {
    const el = document.getElementById('contact');
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
  }
}

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;

  constructor(private canvas: HTMLCanvasElement) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.radius = Math.random() * 2 + 1;
    this.alpha = Math.random() * 0.5 + 0.1;
  }

  update(): void {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > this.canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > this.canvas.height) this.vy *= -1;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(99,102,241,${this.alpha})`;
    ctx.fill();
  }
}
