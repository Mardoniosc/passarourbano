import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { OfertasService } from '../../services/ofertas.service'
import { Oferta } from '../../shared/model/oferta.model'

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta

  constructor(
      private route: ActivatedRoute,
      private ofertaService: OfertasService
    ) { }

  ngOnInit() {
    this.ofertaService.getOfertaId(this.route.snapshot.params['id'])
      .then( (oferta: Oferta) => {
        console.log(oferta)
        this.oferta = oferta
       })
  }

}
