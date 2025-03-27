import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';  
import { NgIf, NgFor } from '@angular/common';   

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor],  
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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadQuestions();
  }

  // ✅ Improved JSON loading with error handling
  loadQuestions(): void {
    this.http.get<any[]>('assets/questions.json')  // ✅ Corrected path
      .subscribe({
        next: (data) => {
          this.questions = data;
          this.isLoading = false;
          this.hasError = false;
        },
        error: (err) => {
          console.error('Error loading questions:', err);
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
      alert(`Quiz completed! Your score is ${this.score}/${this.questions.length}`);
    }
  }
}
