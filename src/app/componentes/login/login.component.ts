import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule, MatLabel } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  formService = inject(FormBuilder);
  form = this.formService.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
  });

  login() {
    alert('Login efetuado com sucesso!');
  }
}
