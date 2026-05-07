import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer>
      <div class="footer-links">
        <a href="https://github.com/azerfarhat" target="_blank" class="footer-link">
          <i class="ti ti-brand-github"></i> GitHub
        </a>
      </div>
      Designed with ♥ by <span>Azer Farhat</span> &middot; {{ year }}
    </footer>
  `,
  styles: [`
    footer {
      text-align: center;
      padding: 2.5rem 6vw;
      border-top: 1px solid rgba(108,99,255,.1);
      color: var(--muted);
      font-size: .8rem;
      span { color: var(--accent); }
    }
    .footer-links {
      margin-bottom: 1rem;
    }
    .footer-link {
      color: var(--muted);
      text-decoration: none;
      transition: color .2s;
      i { margin-right: 6px; }
      &:hover { color: var(--accent); }
    }
  `]
})
export class FooterComponent {
  year = new Date().getFullYear();
}
