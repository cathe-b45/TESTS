import { Component } from '@angular/core';
import { HeadbarComponent } from '../../headbar/headbar.component';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { Router } from '@angular/router';
@Component({
  selector: 'MultimediaComponent',
 standalone: true,
   imports: [
     CommonModule,
     CardModule,
     ButtonModule,
     RippleModule,
     HeadbarComponent
   ],
  templateUrl: './multimedia.component.html',
  styleUrl: './multimedia.component.scss'
})
export class MultimediaComponent {
constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([`/multimedia/${route}`]);
  }
}
