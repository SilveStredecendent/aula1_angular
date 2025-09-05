import { Component } from '@angular/core';

@Component({
  selector: 'app-listaprodutoscomponent',
  standalone: false,
  templateUrl: './listaprodutoscomponent.html',
  styleUrl: './listaprodutoscomponent.css'
})
export class Listaprodutoscomponent {

  novoProduto = "";

  mostrarListaSimples = true;

   listasimples = [
    {produto: 'Uva'},
    {produto: 'Banana'},
    {produto: 'Amora'},
    {produto: 'Melancia'},
    {produto: 'Maça'},
    {produto: 'Cacau'},
   ]

}
