import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class CatalogComponent {
  // Lista de juegos usando las imágenes locales descargadas
games = [
  {
    title: 'Elden Ring',
    genre: 'RPG / Acción',
    price: 59.99,
    image: '/assets/img/card-elden.jpg',
    tag: 'Más Vendido'
  },
  {
    title: 'Spider-Man 2',
    genre: 'Aventura',
    price: 69.99,
    image: '/assets/img/card-spiderman.jpg',
    tag: 'Nuevo'
  },
  {
    title: 'Forza Horizon 5',
    genre: 'Carreras',
    price: 49.99,
    image: '/assets/img/card-forza.jpg',
    tag: 'Oferta'
  },
  {
    title: 'Valorant',
    genre: 'Shooter',
    price: 0,
    image: '/assets/img/card-valorant.jpg',
    tag: 'Gratis'
  }
];

  addToCart(gameTitle: string) {
    alert(`🎮 ${gameTitle} se ha añadido a tu biblioteca.`);
  }
}