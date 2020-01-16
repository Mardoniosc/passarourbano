import { Component, OnInit } from '@angular/core';

import { OfertasService } from '../../services/ofertas.service'
import { Observable, Subject } from 'rxjs';
import { Oferta } from 'src/app/shared/model/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>

  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor( private ofertaService: OfertasService ) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa //retorno
      .debounceTime(1000) // executa a ação após 1s
      .distinctUntilChanged()
      .switchMap((termo: string) => {
        if(termo.trim() === ''){
          return Observable.of<Oferta[]>([])
        }
        return this.ofertaService.pesquisaOfertas(termo)
      })
      .catch((erro: any) => {
        console.log(erro) // envia para administração
        return Observable.of<Oferta[]>([])
      })
  }

  public perquisa(termoDaPesquisa: string): void {
    this.subjectPesquisa.next(termoDaPesquisa)
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('')
  }
}
