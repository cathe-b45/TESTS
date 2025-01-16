import { Component } from '@angular/core';
import { HeadbarComponent } from '../../headbar/headbar.component';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ssdd',
 standalone: true,
   imports: [
     CommonModule,
     CardModule,
     ButtonModule,
     RippleModule,
     HeadbarComponent
   ],
  templateUrl: './ssdd.component.html',
  styleUrl: './ssdd.component.scss'
})
export class SsddComponent {
constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([`/ssdd/${route}`]);
  }
}
