import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// ✅ Importaciones PrimeNG
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { HeadbarComponent } from '../../headbar/headbar.component';

@Component({
  selector: 'app-iso',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    RippleModule,
    HeadbarComponent
  ],
  templateUrl: './iso.component.html',
  styleUrl: './iso.component.scss'
})
export class IsoComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([`/iso/${route}`]);
  }
}
