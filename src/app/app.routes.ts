import { Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './question/question.component';
import { ResultComponent } from './result/result.component';

export const routes: Routes = [
  { path: '', component: QuizComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'result', component: ResultComponent }
];
