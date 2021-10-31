import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './componentes/chat/chat.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  { path:'home',component:HomeComponent },
  { path:'login',component:LoginComponent },
  { path:'error',component:ErrorComponent },
  { path:'quien-soy',component:QuienSoyComponent, canActivate: [AuthGuard] },
  { path:'register',component:RegisterComponent },
  { path:'app-chat',component:ChatComponent, canActivate: [AuthGuard] },
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'**', redirectTo:'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
