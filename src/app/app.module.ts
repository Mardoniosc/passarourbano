import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router'


import { ROUTES } from '../app/routes/app.routes'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './components/topo/topo.component';
import { HomeComponent } from './components/home/home.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { DiversaoComponent } from './components/diversao/diversao.component';
import { OfertaComponent } from './components/oferta/oferta.component';
import { ComoUsarComponent } from './components/oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './components/oferta/onde-fica/onde-fica.component';


// PIPE

import { DescricaoReduzida } from './util/descricao-reduzida.pipe'

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    DescricaoReduzida
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
