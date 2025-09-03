import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedmoduleRoutingModule } from './sharedmodule-routing-module';
import { Botaocomponent } from './botaocomponent/botaocomponent';


@NgModule({
  declarations: [
    Botaocomponent
  ],
  imports: [
    CommonModule,
    SharedmoduleRoutingModule
  ]
})
export class SharedmoduleModule { }
