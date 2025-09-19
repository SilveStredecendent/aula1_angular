import { Component } from '@angular/core';

@Component({
  selector: 'app-mundovontaderepressao',
  standalone: false,
  templateUrl: './mundovontaderepressao.html',
  styleUrl: './mundovontaderepressao.css'
})
export class Mundovontaderepressao {
  logado: boolean = false;

  alternarLogin() {
    this.logado = !this.logado;
  }
}