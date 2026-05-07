import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&';

@Directive({
  selector: '[appScramble]',
  standalone: true
})
export class ScrambleDirective implements OnInit, OnDestroy {
  @Input('appScramble') finalText = '';
  @Input() scrambleDuration = 800;
  @Input() scrambleTrigger: 'immediate' | 'scroll' = 'scroll';

  private observer: IntersectionObserver | null = null;
  private animFrame: number | null = null;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    if (!this.finalText) {
      this.finalText = this.el.nativeElement.textContent || '';
    }
    if (this.scrambleTrigger === 'immediate') {
      this.run();
    } else {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            this.run();
            this.observer?.disconnect();
          }
        });
      }, { threshold: 0.2 });
      this.observer.observe(this.el.nativeElement);
    }
  }

  run(duration = this.scrambleDuration) {
    const el = this.el.nativeElement;
    const final = this.finalText;
    const len = final.length;
    let start: number | null = null;

    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const revealed = Math.floor(p * len);
      let out = '';
      for (let i = 0; i < len; i++) {
        if (i < revealed || final[i] === ' ') out += final[i];
        else out += CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      el.textContent = out;
      if (p < 1) this.animFrame = requestAnimationFrame(step);
      else el.textContent = final;
    };
    this.animFrame = requestAnimationFrame(step);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    if (this.animFrame) cancelAnimationFrame(this.animFrame);
  }
}
