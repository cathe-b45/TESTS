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
import { ArcoComponent } from './pages/asignaturas/arco/arco.component';
import { ThreadlevelComponent } from './pages/asignaturas/arco/threadlevel/threadlevel.component';
import { Tema2Component } from './pages/asignaturas/arco/tema2/tema2.component';
import { Tema1Component } from './pages/asignaturas/arco/tema1/tema1.component';
import { SuperscalarsComponent } from './pages/asignaturas/arco/superscalars/superscalars.component';
import { TestSsddCompletoComponent } from './pages/asignaturas/ssdd/test-ssdd-completo/test-ssdd-completo.component';
import { SsddEjerciciosComponent } from './pages/asignaturas/ssdd/ssdd-ejercicios/ssdd-ejercicios.component';
import { TestSsddTemasComponent } from './pages/asignaturas/ssdd/test-ssdd-temas/test-ssdd-temas.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }, // Página de inicio
  { path: 'ssii', component: SsiiComponent },
  { path: 'ssii/temas', component: TestTemasComponent },
  { path: 'ssii/completo', component: TestCompletoComponent },
  { path: 'ssii/completo/test', component: TestCompletoSsiiComponent },
  { path: 'ssii/temas/test', component: TestTemasSsiiComponent },
  { path: 'ssdd', component: SsddComponent },
  { path: 'ssdd/completo', component: TestSsddCompletoComponent },
  { path: 'ssdd/examenes', component: TestSsddTemasComponent },
  { path: 'ssdd/ejercicios', component: SsddEjerciciosComponent },

  { path: 'iso', component: IsoComponent },
  { path: 'iso/completo', component: TestCompletoIsoComponent },
  { path: 'arco', component: ArcoComponent },
  { path: 'arco/superscalars', component: SuperscalarsComponent },
  { path: 'arco/t1', component: Tema1Component },
  { path: 'arco/t2', component: Tema2Component },
  { path: 'arco/threadLevel', component: ThreadlevelComponent },


  { path: '**', redirectTo: '', pathMatch: 'full' } // Rutas no definidas redirigen al Home
];
