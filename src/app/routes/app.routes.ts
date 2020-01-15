import { Routes } from '@angular/router'

import { HomeComponent } from '../components/home/home.component'
import { RestaurantesComponent } from '../components/restaurantes/restaurantes.component'
import { DiversaoComponent } from '../components/diversao/diversao.component'
import { OfertaComponent } from '../components/oferta/oferta.component'

// comoponentes filhos
import { ComoUsarComponent } from '../components/oferta/como-usar/como-usar.component'
import { OndeFicaComponent } from '../components/oferta/onde-fica/onde-fica.component'


export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurantes', component: RestaurantesComponent },
  { path: 'diversao', component: DiversaoComponent },
  { path: 'oferta', component: HomeComponent },
  { path: 'oferta/:id', component: OfertaComponent,
    children: [
      { path: '', component: ComoUsarComponent },
      { path: 'como-usar', component: ComoUsarComponent },
      { path: 'onde-fica', component: OndeFicaComponent }
    ]
  }
]
