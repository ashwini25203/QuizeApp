import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  score: number = 0;
  total: number = 0;
  percentage: number = 0;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state as { score: number; total: number };

    this.score = state?.score ?? 0;
    this.total = state?.total ?? 0;

    this.percentage = this.total > 0 ? Math.round((this.score / this.total) * 100) : 0;
  }
}
