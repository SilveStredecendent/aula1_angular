import { Component } from '@angular/core';

@Component({
  selector: 'app-estoque',
  standalone: false,
  templateUrl: './estoque.html',
  styleUrl: './estoque.css'
})
export class Estoque {
  mostrarListagem = true;

  toggleMensagem() {
    this.mostrarListagem = !this.mostrarListagem;
  }

  listaprodutos = [
    {nome: 'Nootebook', preco: 3500, estoque: 5},
    {nome: 'Teclado', preco: 150, estoque: 0},
    {nome: 'Monitor', preco: 1200, estoque: 3}
  ];

const valor = listaprodutos[0].preco; 

  aumentarPreco()  {
    this.aumentarPreco +=
  }

}
