import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  standalone: false,
  templateUrl: './cadastrar.html',
  styleUrl: './cadastrar.css'
})
export class Cadastrar {
  nome = 'Herbert';

  caminhoimagem = "https://png.pngtree.com/thumb_back/fh260/background/20240716/pngtree-free-nature-beautiful-background-image-image_16016474.jpg";

  dizerOi() {
    this.nome = 'Olá pessoal!';
  }

  mostrarMensagem = true;

  toggleMensagem(){}
}
