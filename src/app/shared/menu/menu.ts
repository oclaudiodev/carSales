import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-menu',
  styleUrl: './menu.css',
  templateUrl: './menu.html',
})

export class Menu {

  itensMenu = [
    { label: 'Início', link: '' },
    { label: 'Veículos', link: '#veiculos' },
    { label: 'Carrinho', link: '#carrinho' },
  ];
}
