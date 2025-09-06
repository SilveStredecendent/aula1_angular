import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NietzscheRoutingModule } from './nietzsche-routing-module';
import { Zarastustra } from './zarastustra/zarastustra';

import { MatCardModule } from '@angular/material/card';

import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    NietzscheRoutingModule,
    MatCardModule,
    MatExpansionModule,
    Zarastustra
  ]
})
export class NietzscheModule { }