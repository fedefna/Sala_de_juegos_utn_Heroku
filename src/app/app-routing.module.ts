import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './shared/services/auth.guard';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';
import { ResultadosComponent } from './pages/resultados/resultados.component';
import { EncuestaComponent } from './pages/encuesta/encuesta.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'quien-soy', component: QuienSoyComponent },
  { path: 'resultados', component: ResultadosComponent },
  { path: 'encuesta', component: EncuestaComponent },
  {
    path: 'juegos',
    loadChildren: () => import('./juegos/juegos.module').then(m => m.JuegosModule),
    canActivate: [AuthGuard]
  },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
