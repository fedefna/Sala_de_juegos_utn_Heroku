import { Component, OnInit } from '@angular/core';
import { PuntajesService } from '../../shared/services/puntajes.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {


  elemento: any;

  constructor(public puntajeService: PuntajesService) {
    this.puntajeService.traerResultados().subscribe(() => {
      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 20)
    })
  }

  ngOnInit(): void {
  }

}
