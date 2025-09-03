import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Botaocomponent } from './botaocomponent/botaocomponent';

const routes: Routes = [
   {path: 'botaocomponent', component: Botaocomponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedmoduleRoutingModule { }