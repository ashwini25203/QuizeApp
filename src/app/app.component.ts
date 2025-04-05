import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // ✅ Import RouterModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],  // ✅ Add RouterModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quiz App';
}
