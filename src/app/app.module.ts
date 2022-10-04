import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FristComponentComponent } from './components/frist-component/frist-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DiretivasComponent } from './components/diretivas/diretivas.component';
import { CondicionalComponent } from './components/condicional/condicional.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmiterComponent } from './components/emiter/emiter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { ListaComponent } from './components/lista/lista.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    FristComponentComponent,
    ParentDataComponent,
    DiretivasComponent,
    CondicionalComponent,
    EventosComponent,
    EmiterComponent,
    ChangeNumberComponent,
    ListaComponent,
    PipesComponent,
    TwoWayDataBindingComponent
  ],
  imports: [
    BrowserModule, FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
