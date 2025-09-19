import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchopenhauerRoutingModule } from './schopenhauer-routing-module';
import { Mundovontaderepressao } from './mundovontaderepressao/mundovontaderepressao';


@NgModule({
  declarations: [
    Mundovontaderepressao
  ],
  imports: [
    CommonModule,
    SchopenhauerRoutingModule
  ]
})
export class SchopenhauerModule { }
