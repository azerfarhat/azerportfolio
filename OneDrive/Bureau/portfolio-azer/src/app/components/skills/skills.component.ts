import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrambleDirective } from '../../directives/scramble.directive';

interface Skill {
  icon: string;
  name: string;
  cat: string;
  color: 'purple' | 'teal' | 'pink';
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrambleDirective],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: Skill[] = [
    { icon: 'ti-code',    name: '.NET / C#',     cat: 'Backend',      color: 'purple' },
    { icon: 'ti-device-mobile',     name: 'Flutter',       cat: 'Mobile',       color: 'teal' },
    { icon: 'ti-leaf',              name: 'Spring Boot',   cat: 'Backend',      color: 'pink' },
    { icon: 'ti-brand-angular',     name: 'Angular',       cat: 'Frontend',     color: 'purple' },
    { icon: 'ti-brand-typescript',  name: 'TypeScript',    cat: 'Frontend',     color: 'teal' },
    { icon: 'ti-database',          name: 'MySQL',         cat: 'Database',     color: 'pink' },
    { icon: 'ti-brand-git',         name: 'Git',           cat: 'Versioning',   color: 'purple' },
    { icon: 'ti-shield-lock',       name: 'JWT / Auth',    cat: 'Security',     color: 'teal' },
    { icon: 'ti-topology-star-3',   name: 'Microservices', cat: 'Architecture', color: 'pink' },
    { icon: 'ti-sitemap',           name: 'Multi-entity Architecture', cat: 'Architecture', color: 'pink' },
  ];
}
