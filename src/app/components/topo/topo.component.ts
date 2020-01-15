import { Component, OnInit } from '@angular/core';

import { OfertasService } from '../../services/ofertas.service'
import { Observable } from 'rxjs';
import { Oferta } from 'src/app/shared/model/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>

  constructor( private ofertaService: OfertasService ) { }

  ngOnInit() {
  }

  public perquisa(termoDaPesquisa: string): void {
    this.ofertas = this.ofertaService.pesquisaOfertas(termoDaPesquisa)

    this.ofertas.subscribe(
      (ofertas: Oferta[]) => console.log(ofertas),
      (erro: any) => console.log('Error status', erro.status),
      () => console.log('Fluxo de eventos completos')
    )
  }

}
