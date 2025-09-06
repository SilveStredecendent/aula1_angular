import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Zarastustra } from './zarastustra/zarastustra';

const routes: Routes = [{ path: 'zarastustra', component: Zarastustra}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NietzscheRoutingModule { }
