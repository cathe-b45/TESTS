import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { HeadbarComponent } from '../../../headbar/headbar.component';

@Component({
  selector: 'app-test-completo',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    HeadbarComponent
  ],
  templateUrl: './test-completo.component.html',
  styleUrls: ['./test-completo.component.scss']
})
export class TestCompletoComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/ssii']);
  }

  startTest() {
    this.router.navigate(['/ssii/completo/test']);
  }
  
}
