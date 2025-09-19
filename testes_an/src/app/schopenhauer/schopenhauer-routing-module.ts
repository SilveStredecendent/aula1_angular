import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mundovontaderepressao } from './mundovontaderepressao/mundovontaderepressao';

const routes: Routes = [{path: 'mundovontaderepressao', component: Mundovontaderepressao}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchopenhauerRoutingModule { }
