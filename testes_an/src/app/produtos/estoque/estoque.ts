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
    {nome: 'Monitor', preco: 1200, estoque: 3},
    {nome: 'Celular', preco: 5200, estoque: 0},
    {nome: 'Smart Watch', preco: 1550, estoque: 4},
    {nome: 'Mouse', preco: 200, estoque: 9}
  ];

  aumentarPreco() {
    this.listaprodutos.forEach(produto => {
      produto.preco = parseFloat((produto.preco * 1.1).toFixed(2));
    });
  }

  diminuirPreco() {
    this.listaprodutos.forEach(produto => {
      produto.preco = parseFloat((produto.preco * 0.9).toFixed(2));
    });
  }
}