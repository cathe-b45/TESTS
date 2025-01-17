import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { CarouselModule } from 'primeng/carousel';

// ✅ Importaciones PrimeNG
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-headbar',
  standalone: true,
  imports: [
    CommonModule,
    MenubarModule,
    AvatarModule,
    InputTextModule,
    ButtonModule,
    BadgeModule,
    RippleModule,
    CarouselModule,
    DialogModule
  ],
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.scss']
})
export class HeadbarComponent implements OnInit {
  items: MenuItem[] = [];
  mostrarDialogo: boolean = false; // Controla la visibilidad del diálogo
  constructor(private router: Router) {}

  imagenes = [
    { src: 'assets/venti-test.png', alt: 'Imagen 1' },
    { src: 'assets/venti-peluche.png', alt: 'Imagen 2' },
    { src: 'assets/venti-astronauta.png', alt: 'Imagen 3' },
    { src: 'assets/venti-cafe.png', alt: 'Imagen 3' },
    { src: 'assets/venti-manzana.png', alt: 'Imagen 3' },
    { src: 'assets/venti-chuche.png', alt: 'Imagen 3' },
    { src: 'assets/venti-silla.png', alt: 'Imagen 3' },
  ];

  ngOnInit() {
    this.items = [
      {
        label: 'SSII',
        icon: 'pi pi-book',
        items: [
          {
            label: 'Test por Temas',
            icon: 'pi pi-list',
            command: () => this.navigateTo('ssii/temas')
          },
          {
            label: 'Test Completo',
            icon: 'pi pi-check-circle',
            command: () => this.navigateTo('ssii/completo')
          }
        ]
      },
      {
        label: 'SSDD',
        icon: 'pi pi-database',
        items: [
          {
            label: 'Test por Temas',
            icon: 'pi pi-list',
            command: () => this.navigateTo('ssdd/examenes')
          },
          {
            label: 'Test Ejercicios',
            icon: 'pi pi-check-circle',
            command: () => this.navigateTo('ssdd/ejercicios')
          }
        ]
      },
      {
        label: 'ISO',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Test Completo',
            icon: 'pi pi-check-circle',
            command: () => this.navigateTo('iso/completo')
          }
        ]
      }
    ];
  }

  onImageClick() {
    this.mostrarDialogo = true;
  }
  
  /**
   * Navegar a una ruta específica
   */
  navigateTo(route: string) {
    console.log(`Navegando a: ${route}`);
    this.router.navigate([`/${route}`]);
  }
}
