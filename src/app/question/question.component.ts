import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, RouterModule], // ✅ include RouterModule
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions: any[] = [];
  currentQuestionIndex: number = 0;
  selectedOption: string = '';
  score: number = 0;
  isLoading: boolean = true;
  hasError: boolean = false;

  apiUrl: string = 'http://localhost:5000/api/assignments';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions(): void {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.questions = data;
        this.isLoading = false;
        this.hasError = false;
      },
      error: (err) => {
        console.error('❌ Error loading questions:', err);
        this.isLoading = false;
        this.hasError = true;
      }
    });
  }

  selectOption(option: string): void {
    this.selectedOption = option;
  }

  nextQuestion(): void {
    const currentQuestion = this.questions[this.currentQuestionIndex];

    if (this.selectedOption === currentQuestion.answer) {
      this.score++;
    }

    this.selectedOption = '';

    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      // ✅ Redirect to result page and pass score and total
      this.router.navigate(['/result'], {
        state: { score: this.score, total: this.questions.length }
      });
    }
  }
}
