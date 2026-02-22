import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() revealClass: string = 'reveal';
  @Input() threshold: number = 0.15;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.classList.add(this.revealClass);

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: this.threshold, rootMargin: '0px 0px -40px 0px' }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) this.observer.disconnect();
  }
}
