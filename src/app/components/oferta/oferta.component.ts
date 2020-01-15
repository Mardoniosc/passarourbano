import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { OfertasService } from '../../services/ofertas.service'
import { Oferta } from '../../shared/model/oferta.model'

import 'rxjs/Rx'

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit, OnDestroy {

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
  }

  ngOnDestroy(){
  }

}




    // this.route.params.subscribe(
    //   (parametro: any) => {console.log(parametro)},
    //   (erro: any) => console.log(erro),
    //   (() => console.log('Processamento comcluído!'))
    //   )
