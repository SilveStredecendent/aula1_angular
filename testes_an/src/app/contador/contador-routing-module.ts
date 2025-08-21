import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContadorModule } from './contador-module';

const routes: Routes = [{ path: 'conta', component: ContadorModule}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContadorRoutingModule { }
