import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { AuthGuard } from '../shared/services/auth.guard';
import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from './preguntados/preguntados.component';
import { AdivinarPalabraComponent } from './adivinar-palabra/adivinar-palabra.component';

const routes: Routes = [
  {
    path:'ahorcado',
    component: AhorcadoComponent,
    canActivate: [AuthGuard] 
  },
  {
    path:'mayorMenor',
    component: MayorMenorComponent,
    canActivate: [AuthGuard] 
  },
  {
    path:'preguntados',
    component: PreguntadosComponent,
    canActivate: [AuthGuard] 
  },
  {
    path:'adivinarPalabra',
    component: AdivinarPalabraComponent,
    canActivate: [AuthGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
