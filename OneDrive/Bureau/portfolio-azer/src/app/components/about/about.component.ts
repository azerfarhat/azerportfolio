import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrambleDirective } from '../../directives/scramble.directive';
import { WordRevealDirective } from '../../directives/word-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrambleDirective, WordRevealDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {}
