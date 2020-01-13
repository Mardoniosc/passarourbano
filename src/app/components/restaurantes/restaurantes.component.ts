import { Component, OnInit } from '@angular/core'

import { Oferta } from '../../shared/model/oferta.model'
import { OfertasService } from '../../services/ofertas.service'

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [ OfertasService ]
})
export class RestaurantesComponent implements OnInit {

  public ofertas: Oferta[]

  constructor( private ofertasService: OfertasService ) { }

  ngOnInit() {
    this.ofertasService.getOfertasCategoria('restaurante')
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas
      })
      .catch(() => {
        error: "Não conseguiu recuperar os dados"
      })
  }

}
