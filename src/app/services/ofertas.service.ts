import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'


import 'node_modules/rxjs/operator/toPromise'

import { Oferta } from '../shared/model/oferta.model'

import { URL_API } from '../config/app.api'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/retry'

@Injectable()
export class OfertasService {

  private url_string = `${URL_API}/ofertas`

  constructor(private httpCliente: HttpClient ) {}

  public getOfertas(): Promise<Oferta[]> {
    // Efetuar uma requisição Http

    return this.httpCliente.get(`${this.url_string}?destaque=true`)
      .toPromise()
      .then((resposta: any) => resposta )
    // Retorna um promise oferta
  }

  public getOfertasCategoria(categoria: string) : Promise<Oferta[]> {
    return this.httpCliente.get(`${this.url_string}?categoria=${categoria}`)
              .toPromise()
              .then((resposta: any) => resposta)
  }

  public getOfertaId(id: number): Promise<Oferta>{
    return this.httpCliente.get(`${this.url_string}?id=${id}`)
              .toPromise()
              .then((resposta: any) => resposta[0])
  }

  public getComoUsarOfertaPorId(id: number): Promise<string> {
    return this.httpCliente.get(`${URL_API}/como-usar?id=${id}`)
      .toPromise()
      .then((resposta: any) => {
        return resposta[0].descricao
      })
  }

  public getOndeFicaPorId(id: number): Promise<string> {
    return this.httpCliente.get(`${URL_API}/onde-fica?id=${id}`)
      .toPromise()
      .then((resposta: any) => {
        return resposta[0].descricao
      })
  }

  public pesquisaOfertas(termo: string): Observable<Oferta[]> {
    return this.httpCliente.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
      .retry(3)
      .map((resposta: any) => resposta)
  }

}
