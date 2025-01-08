import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// ✅ Importaciones PrimeNG
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { HeadbarComponent } from '../../headbar/headbar.component';

@Component({
  selector: 'app-ssii',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    RippleModule,
    HeadbarComponent
  ],
  templateUrl: './ssii.component.html',
  styleUrls: ['./ssii.component.scss']
})
export class SsiiComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([`/ssii/${route}`]);
  }
}
