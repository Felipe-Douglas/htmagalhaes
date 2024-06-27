import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { NewsletterService } from '../../services/newsletter.service';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss'
})
export class NewsletterComponent {
  newsletter!: FormGroup;
  loading = signal(false);

  constructor(private service: NewsletterService) {
    this.newsletter = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    this.loading.set(true);
    if (this.newsletter.valid) {
      console.log('Formulário enviado com sucesso:', this.newsletter.value);
    } else {
      console.log('Formulário inválido');
    }
  }
}

