import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AuthService } from './shared/services/auth-service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegisterComponent } from './pages/register/register.component';
import { FirebaseModule } from './firebase/firebase.module';
import { UsuarioService } from './shared/services/usuario.service';
import { DatePipe } from '@angular/common';
import { ChatComponent } from './componentes/chat/chat.component';
import { ChatService } from './shared/services/chat.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    QuienSoyComponent,
    NavbarComponent,
    RegisterComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    NgbModule,
    FirebaseModule
  ],
  providers: [AuthService,UsuarioService,DatePipe,ChatService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
  
 }
