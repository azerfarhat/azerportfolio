import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appWordReveal]',
  standalone: true
})
export class WordRevealDirective implements OnInit, OnDestroy {
  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    const el = this.el.nativeElement;
    const text = el.innerText;
    el.innerHTML = '';
    text.split(' ').forEach((word, i) => {
      const span = document.createElement('span');
      span.className = 'word';
      span.textContent = word + ' ';
      span.style.transitionDelay = `${i * 40}ms`;
      el.appendChild(span);
    });

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          requestAnimationFrame(() =>
            requestAnimationFrame(() => el.classList.add('revealed'))
          );
          this.observer?.disconnect();
        }
      });
    }, { threshold: 0.2 });
    this.observer.observe(el);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
