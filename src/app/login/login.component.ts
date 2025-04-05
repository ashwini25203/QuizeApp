import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule]
})
export class LoginComponent {
  loginForm: FormGroup;
  apiUrl = 'http://localhost:5000/api/auth/login'; // ✅ Backend API

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // 🔐 Submit login
  onSubmit() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;

      this.http.post<any>(this.apiUrl, loginData).subscribe({
        next: (response) => {
          console.log('✅ Login successful:', response);

          // You can store token/user info here
          localStorage.setItem('currentUser', JSON.stringify(response));

          alert('✅ Login successful!');
          this.router.navigate(['/question']); // Redirect to main page
        },
        error: (error) => {
          console.error('❌ Login error:', error);
          const message = error?.error?.message || 'Invalid credentials or server error';
          alert('❌ Login failed: ' + message);
        }
      });
    } else {
      alert('⚠️ Please enter valid credentials.');
    }
  }
}
