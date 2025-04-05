import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-assignment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent {
  assignment = {
    question: '',
    options: ['', '', '', ''],
    answer: ''
  };

  apiUrl = 'http://localhost:5000/api/assignments'; // 👈 Change if needed
  successMessage = '';
  errorMessage = '';

  constructor(private http: HttpClient) {}

  submitAssignment(): void {
    this.http.post(this.apiUrl, this.assignment).subscribe({
      next: (res) => {
        this.successMessage = '✅ Assignment added successfully!';
        this.errorMessage = '';
        this.assignment = { question: '', options: ['', '', '', ''], answer: '' };
      },
      error: (err) => {
        console.error('❌ Failed to add assignment:', err);
        this.errorMessage = 'Failed to add assignment. Please try again.';
        this.successMessage = '';
      }
    });
  }
}
