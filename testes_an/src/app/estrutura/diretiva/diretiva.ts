import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
export class Diretiva {
  listaalunos = [
    { cod: 123, nome: 'Leonardo', ativo: true },
    { cod: 456, nome: 'Julia'   , ativo: false},
    { cod: 789, nome: 'Carlos'  , ativo: true },
    { cod: 101, nome: 'Miguel'  , ativo: false},
    { cod: 102, nome: 'Luna'    , ativo: true }
  ]
}
