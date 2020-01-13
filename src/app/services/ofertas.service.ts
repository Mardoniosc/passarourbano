import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import 'node_modules/rxjs/operator/toPromise'

import { Oferta } from '../shared/model/oferta.model'

@Injectable()
export class OfertasService {

  constructor(private httpCliente: HttpClient ) {}

  public getOfertas(): Promise<Oferta[]> {
    // Efetuar uma requisição Http

    return this.httpCliente.get('http://localhost:3333/ofertas?destaque=true')
      .toPromise()
      .then((resposta: any) => resposta )
    // Retorna um promise oferta
  }

  public getOfertasCategoria(categoria: string) : Promise<Oferta[]> {
    return this.httpCliente.get(`http://localhost:3333/ofertas?categoria=${categoria}`)
              .toPromise()
              .then((resposta: any) => resposta)
  }

}






  // public getOfertas2(): Promise<Oferta[]> {
  //   return new Promise((resolve, reject) => {
  //     const deu_certo = true

  //     if (deu_certo) {
  //       setTimeout(() => resolve(this.ofertas), 3000)

  //     } else {
  //       reject({ error: 500, mensagemError: 'Internal server error' })
  //     }
  //   })
  //   .then((ofertas: Oferta[]) => {
  //     // fazer alguma tratativa
  //     console.log('primeiro then')
  //     return ofertas
  //   })

  //   .then((ofertas: Oferta[]) => {
  //     // fazer alguma tratativa
  //     console.log('Segundo then')
  //     return new Promise((resolve2, reject2) => {
  //       setTimeout(() => {resolve2( ofertas )}, 3000)
  //     })
  //   })
  //   .then((ofertas: Oferta[]) => {
  //     console.log('Terceiro then executado após 3s porque estava esperando um promisse ser resolvidao')
  //     return ofertas
  //   })


  // }
