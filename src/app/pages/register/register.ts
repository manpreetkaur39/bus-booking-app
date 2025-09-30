import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.html',
  styleUrl: './register.css',
  imports: [CommonModule, FormsModule]
})
export class Register {
  username = '';
  password = '';
  confirmPassword = '';
  error = '';

  constructor(private router: Router) {}

  register() {
    if (this.password !== this.confirmPassword) {
      this.error = 'Passwords do not match!';
      return;
    }
    // Save user to localStorage (for demo)
    localStorage.setItem('user', JSON.stringify({ username: this.username, password: this.password }));
    this.router.navigate(['/login']);
  }
}
