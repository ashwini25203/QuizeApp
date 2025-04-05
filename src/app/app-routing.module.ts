import { Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './question/question.component';
import { ResultComponent } from './result/result.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard'; // Import Auth Guard

export const routes: Routes = [
  { path: '', component: QuizComponent, canActivate: [AuthGuard] },
  { path: 'question', component: QuestionComponent, canActivate: [AuthGuard] },
  { path: 'result', component: ResultComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }, // No Auth Guard for login
  { path: 'register', component: RegisterComponent } // No Auth Guard for register
];
