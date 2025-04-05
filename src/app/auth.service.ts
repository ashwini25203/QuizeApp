import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser'); // Check if user is logged in
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']); // Redirect to login page on logout
  }
}
