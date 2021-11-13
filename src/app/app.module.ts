import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AuthService } from './shared/services/auth-service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegisterComponent } from './pages/register/register.component';
import { FirebaseModule } from './firebase/firebase.module';
import { UsuarioService } from './shared/services/usuario.service';
import { DatePipe } from '@angular/common';
import { ChatService } from './shared/services/chat.service';
import { MarvelService } from './shared/services/marvel.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ResultadosComponent } from './pages/resultados/resultados.component';
import { EncuestaComponent } from './pages/encuesta/encuesta.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    NavbarComponent,
    RegisterComponent,
    ResultadosComponent,
    EncuestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    FirebaseModule
  ],
  providers: [AuthService,UsuarioService,DatePipe,ChatService,MarvelService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
  
 }
