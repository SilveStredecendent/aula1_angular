import { Component } from '@angular/core';
import { Produtos } from '../modelo/Produtos';

@Component({
  selector: 'app-tabela',
  standalone: false,
  templateUrl: './tabela.html',
  styleUrl: './tabela.css'
})

export class Tabela {

  displayedColumns: string[] = ['nome', 'valor', 'adicionar'];

  dataSource: Produtos[] =[
    {nome: 'coca-cola', valor: 10},
    {nome: 'fanta', valor: 8}
  ];
}