import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrambleDirective } from '../../directives/scramble.directive';

export interface Project {
  num: string;
  title: string;
  desc: string;
  icon: string;
  iconColor: string;
  tags: { label: string; color: string }[];
  featured?: boolean;
  story?: string;
  features?: { icon: string; iconColor: string; title: string; sub: string }[];
  screenshot?: string; // path to image in assets
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrambleDirective],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  phonePeople = [
    { initials: 'SB', name: 'Sara Ben Ali',    time: '09:00', bg: 'rgba(108,99,255,.25)', color: '#6c63ff' },
    { initials: 'MK', name: 'Med Khelil',      time: '10:30', bg: 'rgba(0,217,163,.2)',   color: '#00d9a3' },
    { initials: 'LT', name: 'Leila Trabelsi',  time: '11:15', bg: 'rgba(255,107,107,.15)',color: '#ff6b6b' },
  ];

  onImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
    const placeholder = img.nextElementSibling as HTMLElement;
    if (placeholder) placeholder.style.display = 'flex';
  }

  featured: Project = {
    num: '00',
    title: 'Cabinet Ichraf',
    desc: 'A physiotherapy practice management app — what started as a small gift for my cousin turned into a fully functional MVP.',
    icon: 'ti-heartbeat',
    iconColor: 'pink',
    story: 'What started as a small gift for my cousin, a physiotherapist, became a fully functional MVP — built to solve real daily challenges in her practice.',
    features: [
      { icon: 'ti-users',             iconColor: 'purple', title: 'Patient Management',  sub: 'Centralized medical tracking' },
      { icon: 'ti-calendar-event',    iconColor: 'teal',   title: 'Appointments',        sub: 'Simple & intuitive scheduling' },
      { icon: 'ti-layout-dashboard',  iconColor: 'amber',  title: 'Dashboard',           sub: 'Activity overview at a glance' },
      { icon: 'ti-cash',              iconColor: 'pink',   title: 'Finance Tracking',    sub: 'Clear revenue management' },
    ],
    tags: [
      { label: 'Flutter', color: '' },
      { label: '.NET',    color: '' },
      { label: 'REST API',color: 'g' },
      { label: 'MVP',     color: 'g' },
    ],
    featured: true,
    screenshot: 'assets/screenshots/cabinet-ichraf.png'
  };

  projects: Project[] = [
    {
      num: '01',
      title: 'FirstParc – Fleet Management',
      desc: 'Mobile & web fleet management with GPS tracking, driver management and preventive maintenance.',
      icon: 'ti-car',
      iconColor: 'purple',
      tags: [
        { label: 'Flutter',  color: '' },
        { label: '.NET',     color: '' },
        { label: 'REST API', color: 'g' }
      ],
      screenshot: 'assets/screenshots/firstparc.png'
    },
    {
      num: '02',
      title: 'G-Depot – Warehouse',
      desc: 'Full-stack inventory management system migrated to a microservices architecture with JWT auth.',
      icon: 'ti-building-warehouse',
      iconColor: 'teal',
      tags: [
        { label: 'Spring Boot',   color: '' },
        { label: 'Angular',       color: '' },
        { label: 'Microservices', color: 'g' }
      ],
      screenshot: 'assets/screenshots/gdepot.png'
    },
    {
      num: '03',
      title: 'Event Management Platform',
      desc: 'Web application for managing events and registrations for the Management Club at ISGS.',
      icon: 'ti-calendar-event',
      iconColor: 'pink',
      tags: [
        { label: 'MySQL', color: '' }
      ],
      screenshot: 'assets/screenshots/events.png'
    }
  ];
}
