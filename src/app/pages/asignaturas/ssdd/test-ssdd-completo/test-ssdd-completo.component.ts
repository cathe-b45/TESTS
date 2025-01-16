import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DividerModule } from 'primeng/divider';
import { MessagesModule } from 'primeng/messages';
import { PaginatorModule } from 'primeng/paginator';
import { RadioButtonModule } from 'primeng/radiobutton';
import { HeadbarComponent } from '../../../headbar/headbar.component';

@Component({
  selector: 'app-test-ssdd-completo',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, DividerModule, CardModule, RadioButtonModule, HeadbarComponent, MessagesModule, ConfirmDialogModule, PaginatorModule],
  providers: [ConfirmationService],
  templateUrl: './test-ssdd-completo.component.html',
  styleUrl: './test-ssdd-completo.component.scss'
})
export class TestSsddCompletoComponent {

}
