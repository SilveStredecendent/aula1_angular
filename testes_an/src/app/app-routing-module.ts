import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivrosModule } from './livros/livros-module';

const routes: Routes = [{ path: 'livros', loadChildren: () => import('./livros/livros-module').then(m => m.LivrosModule) }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
