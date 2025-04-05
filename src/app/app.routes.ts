// import { Routes } from '@angular/router';
// import { QuizComponent } from './quiz/quiz.component';
// import { QuestionComponent } from './question/question.component';
// import { ResultComponent } from './result/result.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';

// export const routes: Routes = [
//   { path: '', component: QuizComponent },
//   { path: 'question', component: QuestionComponent },
//   { path: 'result', component: ResultComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
// ];



import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./quiz/quiz.component').then(m => m.QuizComponent),
  },
  {
    path: 'question',
    loadComponent: () =>
      import('./question/question.component').then(m => m.QuestionComponent),
  },
  {
    path: 'result',
    loadComponent: () =>
      import('./result/result.component').then(m => m.ResultComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./register/register.component').then(m => m.RegisterComponent),
  },
  {
    path: 'add-assignment',
    loadComponent: () =>
      import('./add-assignment/add-assignment.component').then(m => m.AddAssignmentComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
