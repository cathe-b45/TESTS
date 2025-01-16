import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// ✅ Importaciones PrimeNG
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { HeadbarComponent } from '../../../headbar/headbar.component';

@Component({
  selector: 'app-threadlevel',
   standalone: true,
    imports: [
      CommonModule,
      CardModule,
      ButtonModule,
      RippleModule,
      HeadbarComponent
    ],
  templateUrl: './threadlevel.component.html',
  styleUrl: './threadlevel.component.scss'
})
export class ThreadlevelComponent {

}
