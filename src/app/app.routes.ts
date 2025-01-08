import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SsiiComponent } from './pages/asignaturas/ssii/ssii.component';
import { SsddComponent } from './pages/asignaturas/ssdd/ssdd.component';
import { IsoComponent } from './pages/asignaturas/iso/iso.component';
import { TestCompletoComponent } from './pages/asignaturas/ssii/test-completo/test-completo.component';
import { TestTemasComponent } from './pages/asignaturas/ssii/test-temas/test-temas.component';
import { TestCompletoSsiiComponent } from './pages/asignaturas/ssii/test-completo/test-completo-ssii/test-completo-ssii.component';
import { TestTemasSsiiComponent } from './pages/asignaturas/ssii/test-temas/test-temas-ssii/test-temas-ssii.component';
import { TestCompletoIsoComponent } from './pages/asignaturas/iso/test-completo-iso/test-completo-iso.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }, // Página de inicio
  { path: 'ssii', component: SsiiComponent },
  { path: 'ssii/temas', component: TestTemasComponent },
  { path: 'ssii/completo', component: TestCompletoComponent },
  { path: 'ssii/completo/test', component: TestCompletoSsiiComponent },
  { path: 'ssii/temas/test', component: TestTemasSsiiComponent },
  { path: 'ssdd', component: SsddComponent },
  { path: 'iso', component: IsoComponent },
  { path: 'iso/completo', component: TestCompletoIsoComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' } // Rutas no definidas redirigen al Home
];
