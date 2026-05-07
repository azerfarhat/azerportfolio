import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrambleDirective } from '../../directives/scramble.directive';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ScrambleDirective],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  typewriterText = '';
  private roles = [
    'Full-Stack Developer',
    'Mobile Developer',
    'Backend Developer',
    'Frontend Crafter',
    'Problem Solver'
  ];
  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private twTimer: any;
  private roleTimer: any;

  ngOnInit() {
    setTimeout(() => this.typeTick(), 1200);
    setTimeout(() => this.nextRole(), 3000);
  }

  private typeTick() {
    const word = this.roles[this.roleIndex % this.roles.length];
    if (!this.deleting) {
      this.typewriterText = word.slice(0, ++this.charIndex);
      if (this.charIndex === word.length) {
        this.deleting = true;
        this.twTimer = setTimeout(() => this.typeTick(), 2500);
        return;
      }
    } else {
      this.typewriterText = word.slice(0, --this.charIndex);
      if (this.charIndex === 0) {
        this.deleting = false;
        this.roleIndex++;
      }
    }
    this.twTimer = setTimeout(() => this.typeTick(), this.deleting ? 80 : 120);
  }

  // Scramble role display (bottom bar)
  roleDisplay = 'Full-Stack Developer';
  private roleDisplayList = [
    'Full-Stack Developer',
    'Mobile Developer · Flutter',
    'Backend Developer · .NET',
    'Frontend Crafter · Angular'
  ];
  private rdIdx = 0;

  private nextRole() {
    this.rdIdx = (this.rdIdx + 1) % this.roleDisplayList.length;
    const final = this.roleDisplayList[this.rdIdx];
    this.scrambleText(final, (t) => this.roleDisplay = t);
    this.roleTimer = setTimeout(() => this.nextRole(), 4000);
  }

  private scrambleText(final: string, setter: (t: string) => void, dur = 700) {
    const len = final.length;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const rev = Math.floor(p * len);
      let out = '';
      for (let i = 0; i < len; i++) {
        if (i < rev || final[i] === ' ') out += final[i];
        else out += CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      setter(out);
      if (p < 1) requestAnimationFrame(step);
      else setter(final);
    };
    requestAnimationFrame(step);
  }

  ngOnDestroy() {
    clearTimeout(this.twTimer);
    clearTimeout(this.roleTimer);
  }
}
