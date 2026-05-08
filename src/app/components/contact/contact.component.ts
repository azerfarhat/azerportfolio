import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrambleDirective } from '../../directives/scramble.directive';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrambleDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // Form data
  formData = {
    name: '',
    email: '',
    message: ''
  };

  // Status messages
  submitStatus = '';
  isSubmitting = false;
  submitError = false;

  links = [
    { icon: 'ti-mail',          color: 'purple', label: 'azerfarhat6@gmail.com',        sub: 'Email',      href: 'mailto:azerfarhat6@gmail.com' },
    { icon: 'ti-phone',         color: 'teal',   label: '+216 54 401 174',               sub: 'Phone',      href: 'tel:+21654401174' },
    { icon: 'ti-brand-linkedin',color: 'purple', label: 'linkedin.com/in/azerfarhat',   sub: 'LinkedIn',   href: 'https://linkedin.com/in/azerfarhat' },
    { icon: 'ti-map-pin',       color: 'pink',   label: 'Ouled Chamekh, Mahdia || Sousse',   sub: 'Location',   href: '#' },
  ];

  ngOnInit() {
    // Initialize EmailJS
    emailjs.init('GCS0UTA0RXST8-uNZ');
  }

  onSubmit(event: Event) {
    event.preventDefault();

    // Validate form
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.submitStatus = 'Please fill all fields';
      this.submitError = true;
      return;
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.formData.email)) {
      this.submitStatus = 'Please enter a valid email';
      this.submitError = true;
      return;
    }

    this.isSubmitting = true;
    this.submitStatus = '';

    // Send email using EmailJS
    emailjs.send('service_44pw3to', 'template_eqx8sdd', {
      to_email: 'azerfarhat6@gmail.com',
      from_name: this.formData.name,
      from_email: this.formData.email,
      message: this.formData.message
    })
      .then((response) => {
        this.submitStatus = 'Message sent successfully! ✓';
        this.submitError = false;
        // Reset form
        this.formData = { name: '', email: '', message: '' };
        // Clear message after 5 seconds
        setTimeout(() => {
          this.submitStatus = '';
        }, 5000);
      })
      .catch((error) => {
        this.submitStatus = 'Error sending message. Please try again.';
        this.submitError = true;
        console.error('EmailJS error:', error);
      })
      .finally(() => {
        this.isSubmitting = false;
      });
  }
}
