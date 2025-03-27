import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  score = Math.floor(Math.random() * 100);
}
