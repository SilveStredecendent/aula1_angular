import { Component } from '@angular/core';

@Component({
  selector: 'app-conta',
  standalone: false,
  templateUrl: './conta.html',
  styleUrl: './conta.css'
})
export class Conta {
  zero = 0;

  adicionar() {
    this.zero ++; 
  }

  remover() {
   this.zero --; 
  }
}