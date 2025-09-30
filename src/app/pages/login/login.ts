import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username = '';
  password = '';
  error = '';

  constructor(private router: Router) {}

  login() {
    const user = localStorage.getItem('user');
    if (user) {
      const { username, password } = JSON.parse(user);
      if (this.username === username && this.password === password) {
        // Save login state (for demo)
        localStorage.setItem('loggedIn', 'true');
        this.router.navigate(['/']);
        return;
      }
    }
    this.error = 'Invalid username or password!';
  }
}
