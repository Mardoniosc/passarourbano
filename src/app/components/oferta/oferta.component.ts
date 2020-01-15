import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { OfertasService } from '../../services/ofertas.service'
import { Oferta } from '../../shared/model/oferta.model'

import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx'

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
        this.oferta = oferta
        console.log(oferta)
       })

    // this.route.params.subscribe(
    //   (parametro: any) => {console.log(parametro)},
    //   (erro: any) => console.log(erro),
    //   (() => console.log('Processamento comcluído!'))

    //   )

    let tempo = Observable.interval(2000)

    tempo.subscribe((intervalo: number) => {
      console.log(intervalo)
    })
  }

}
