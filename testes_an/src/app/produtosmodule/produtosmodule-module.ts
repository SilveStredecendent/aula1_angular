import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosmoduleRoutingModule } from './produtosmodule-routing-module';
import { Listaprodutoscomponent } from './listaprodutoscomponent/listaprodutoscomponent';


@NgModule({
  declarations: [
    Listaprodutoscomponent
  ],
  imports: [
    CommonModule,
    ProdutosmoduleRoutingModule
  ]
})
export class ProdutosmoduleModule { }
