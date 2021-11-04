import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { ChatModule } from '../componentes/chat/chat.module';
import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from './preguntados/preguntados.component';
import { AdivinarPalabraComponent } from './adivinar-palabra/adivinar-palabra.component';


@NgModule({
  declarations: [AhorcadoComponent, MayorMenorComponent, PreguntadosComponent, AdivinarPalabraComponent],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    ChatModule
  ]
})
export class JuegosModule { }
