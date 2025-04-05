import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule]
})
export class RegisterComponent {
  registerForm: FormGroup;
  apiUrl = 'http://localhost:5000/api/auth/register';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router // ✅ Correctly placed
  ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  // 🔐 Custom validator for password match
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  // 📤 Submit form
  onSubmit() {
    if (this.registerForm.valid) {
      const { name, email, password } = this.registerForm.value;

      this.http.post<any>(this.apiUrl, { name, email, password }).subscribe({
        next: (response) => {
          console.log('✅ Registration successful:', response);
          alert('✅ Registration successful!');
          this.registerForm.reset();
          this.router.navigate(['/login']); // ✅ Redirect after success
        },
        error: (error) => {
          console.error('❌ Registration error:', error);
          const message = error?.error?.message || 'Server error';
          alert('❌ Registration failed: ' + message);
        }
      });
    } else {
      alert('⚠️ Please fill in all required fields correctly.');
    }
  }
}
