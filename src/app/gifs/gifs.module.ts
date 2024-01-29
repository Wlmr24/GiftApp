import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponentComponent } from './gifs-page/gifs-page-component.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    GifsPageComponentComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GifsPageComponentComponent,
  ]
})
export class GifsModule { }
