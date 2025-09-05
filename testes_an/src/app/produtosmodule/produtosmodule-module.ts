import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutosmoduleRoutingModule } from './produtosmodule-routing-module';
import { Listaprodutoscomponent } from './listaprodutoscomponent/listaprodutoscomponent';

import { SharedmoduleModule } from '../sharedmodule/sharedmodule-module';

@NgModule({
  declarations: [Listaprodutoscomponent], exports: [Listaprodutoscomponent],
  imports: [
    CommonModule,
    ProdutosmoduleRoutingModule,
    FormsModule,
    SharedmoduleModule 
  ]
})
export class ProdutosmoduleModule { }