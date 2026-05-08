import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrambleDirective } from '../../directives/scramble.directive';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

export interface Experience {
  date: string;
  company: string;
  role: string;
  stack: string;
  bullets: string[];
  color: 'purple' | 'teal';
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ScrambleDirective, ScrollRevealDirective],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      date: 'Jan 2026 — May 2026',
      company: 'SimSoft · Sousse, Tunisia',
      role: 'PFE Intern — Full-Stack Developer',
      stack: 'Flutter · .NET · RESTful APIs',
      color: 'purple',
      bullets: [
        'Cross-platform mobile app development with Flutter',
        'Backend architecture and RESTful APIs with .NET',
        'Vehicle tracking, driver management & preventive maintenance modules'
      ]
    },
    {
      date: 'Jun — Aug 2025',
      company: 'CamelSOFT · Sousse, Tunisia',
      role: 'Summer Intern — Full-Stack Developer',
      stack: 'Spring Boot · Angular · Microservices · JWT',
      color: 'teal',
      bullets: [
        'Contributed as part of a team to the migration of a monolithic application to microservices architecture.',
        'Designed and built a full-stack inventory management system',
        'RESTful APIs with Spring Boot connected to an Angular frontend',
        'Implemented a secure JWT-based authentication system'
      ]
    }
  ];
}
