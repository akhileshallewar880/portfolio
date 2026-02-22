import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ElementRef,
  ViewChild,
  ViewChildren,
  QueryList,
  HostListener,
  signal,
  computed
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ShowcaseSlide {
  id: number;
  screen: string;
  image: string;
  tag: string;
  headline: string;
  subline: string;
  description: string;
  highlights: string[];
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
}

@Component({
  selector: 'app-ride-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ride-showcase.component.html',
  styleUrl: './ride-showcase.component.scss'
})
export class RideShowcaseComponent implements AfterViewInit, OnDestroy {
  @ViewChild('showcaseSection') showcaseSection!: ElementRef<HTMLElement>;
  @ViewChild('stickyPhone') stickyPhone!: ElementRef<HTMLElement>;

  activeIndex = signal(0);
  scrollProgress = signal(0);
  isInView = signal(false);

  private scrollHandler = () => this.onWindowScroll();

  slides: ShowcaseSlide[] = [
    {
      id: 0,
      screen: 'Splash Screen',
      image: 'assets/splash_screen.jpeg',
      tag: '// launch experience',
      headline: 'VanYatra',
      subline: 'Rides Reimagined',
      description: 'A bold, purposeful brand launch. VanYatra opens with a stunning splash that sets the tone for the entire experience — clean, fast, and memorable.',
      highlights: ['Instant app loading', 'Brand identity', 'Seamless entry animation'],
      accentColor: '#6366f1',
      gradientFrom: '#6366f1',
      gradientTo: '#818cf8'
    },
    {
      id: 1,
      screen: 'Onboarding Screen',
      image: 'assets/on_boarding_screen.jpeg',
      tag: '// first impression',
      headline: 'Onboard',
      subline: 'in Seconds',
      description: 'Passengers and drivers are guided through a smooth, intuitive onboarding flow that collects just enough information to get them moving — nothing more.',
      highlights: ['Role-based registration', 'Progressive disclosure', 'Minimal steps to get started'],
      accentColor: '#7c3aed',
      gradientFrom: '#7c3aed',
      gradientTo: '#a855f7'
    },
    {
      id: 2,
      screen: 'OTP Verification',
      image: 'assets/otp_screen.jpeg',
      tag: '// secure authentication',
      headline: 'Verify',
      subline: 'Securely',
      description: 'JWT-secured OTP verification ensures every user is who they say they are. Fast, reliable, and protected with Role-Based Access Control under the hood.',
      highlights: ['OTP-based phone verification', 'JWT token generation', 'RBAC role assignment on sign-in'],
      accentColor: '#0ea5e9',
      gradientFrom: '#0ea5e9',
      gradientTo: '#38bdf8'
    },
    {
      id: 3,
      screen: 'Home Screen',
      image: 'assets/home_screen.jpeg',
      tag: '// passenger experience',
      headline: 'Discover',
      subline: 'Rides Around You',
      description: 'The passenger home screen is your control center. Set your pickup, view nearby vans, get ETA estimates, and see real-time pricing — all at a glance.',
      highlights: ['Interactive map with live driver pins', 'Transparent ETA & fare display', 'Smart pickup suggestions'],
      accentColor: '#10b981',
      gradientFrom: '#10b981',
      gradientTo: '#34d399'
    },
    {
      id: 4,
      screen: 'Ride List Screen',
      image: 'assets/ride_list_screen.jpeg',
      tag: '// smart selection',
      headline: 'Choose',
      subline: 'Your Perfect Ride',
      description: 'Browse available rides filtered by departure time, price, and capacity. Every listing shows you exactly what you\'re getting before you commit.',
      highlights: ['Filtered ride browsing', 'Real-time seat availability', 'Price & time comparison'],
      accentColor: '#f59e0b',
      gradientFrom: '#f59e0b',
      gradientTo: '#fbbf24'
    },
    {
      id: 5,
      screen: 'Booking Screen',
      image: 'assets/booking_screen.jpeg',
      tag: '// effortless booking',
      headline: 'Book',
      subline: 'with Confidence',
      description: 'Select your seat, review your fare, and confirm in one tap. The booking flow is distilled to its essence — fast, transparent, and friction-free.',
      highlights: ['Seat selection interface', 'Fare breakdown before payment', 'One-tap booking confirmation'],
      accentColor: '#ef4444',
      gradientFrom: '#ef4444',
      gradientTo: '#f87171'
    },
    {
      id: 6,
      screen: 'Booking Confirmed',
      image: 'assets/booking_confirmed_screen.jpeg',
      tag: '// confirmation',
      headline: 'Confirmed!',
      subline: 'Your Ride is Set',
      description: 'Instant booking confirmation with driver details, pickup time, and a QR-style ticket. Real-time SignalR notifications keep both rider and driver in sync.',
      highlights: ['Instant SignalR push notification', 'Driver info & contact', 'Digital ride ticket with booking ID'],
      accentColor: '#059669',
      gradientFrom: '#059669',
      gradientTo: '#10b981'
    },
    {
      id: 7,
      screen: 'Live Tracking Screen',
      image: 'assets/live_tracking_screen.jpeg',
      tag: '// real-time GPS',
      headline: 'Track',
      subline: 'in Real-Time',
      description: 'The crown jewel of VanYatra. Watch your van move live on the map powered by SignalR WebSocket hubs. Arrival updates every second. No guessing, just knowing.',
      highlights: ['Live GPS via SignalR WebSocket hubs', 'Sub-second location updates', 'ETA recalculated continuously'],
      accentColor: '#6366f1',
      gradientFrom: '#4f46e5',
      gradientTo: '#0ea5e9'
    }
  ];

  get activeSlide(): ShowcaseSlide {
    return this.slides[this.activeIndex()];
  }

  ngAfterViewInit(): void {
    window.addEventListener('scroll', this.scrollHandler, { passive: true });
    this.onWindowScroll();
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (!this.showcaseSection) return;

    const section = this.showcaseSection.nativeElement;
    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top;
    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;

    // Section is in view
    const inView = sectionTop < viewportHeight && rect.bottom > 0;
    this.isInView.set(inView);

    // Calculate scroll progress through the section (0 to 1)
    const scrolled = Math.max(0, -sectionTop);
    const scrollable = sectionHeight - viewportHeight;
    const progress = scrollable > 0 ? Math.min(1, scrolled / scrollable) : 0;
    this.scrollProgress.set(progress);

    // Determine active slide based on progress
    const slideCount = this.slides.length;
    const slideIndex = Math.min(
      slideCount - 1,
      Math.floor(progress * slideCount)
    );
    this.activeIndex.set(slideIndex);
  }

  goToSlide(index: number): void {
    if (!this.showcaseSection) return;
    const section = this.showcaseSection.nativeElement;
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollable = sectionHeight - viewportHeight;
    const target = sectionTop + (index / this.slides.length) * scrollable;
    window.scrollTo({ top: target, behavior: 'smooth' });
  }
}
