import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { HeadbarComponent } from '../../../headbar/headbar.component';

@Component({
  selector: 'app-test-temas',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    HeadbarComponent
  ],
  templateUrl: './test-temas.component.html',
  styleUrls: ['./test-temas.component.scss']
})
export class TestTemasComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/ssii']);
  }

  startTest() {
    this.router.navigate(['/ssii/temas/test']);
  }
  
}
