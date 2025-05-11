import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SsiiComponent } from './pages/asignaturas/ssii/ssii.component';
import { SsddComponent } from './pages/asignaturas/ssdd/ssdd.component';
import { IsoComponent } from './pages/asignaturas/iso/iso.component';
import { ArcoComponent } from './pages/asignaturas/arco/arco.component';
import { DyGComponent } from './pages/asignaturas/dyg/dyg.component';
import { ISIComponent } from './pages/asignaturas/isi/isi.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }, // Ruta raíz
  { path: 'ssii', component: SsiiComponent },
  { path: 'ssdd', component: SsddComponent },
  { path: 'iso', component: IsoComponent },
  { path: 'arco', component: ArcoComponent },
  { path: 'dyg', component: DyGComponent },
  { path: 'isi', component: ISIComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirección a Home para rutas no definidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
