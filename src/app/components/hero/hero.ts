import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  // Arreglo de juegos para el slider dinámico
private games = [
  {
    title: 'CYBERPUNK: NIGHT CITY',
    subtitle: 'DESTACADO DEL MES',
    description: 'Explora la megalópolis obsesionada con el poder, el glamur y las modificaciones corporales.',
    image: '/assets/img/hero-cyberpunk.jpg', // Nota la "/" al inicio
    accentColor: '#00ffcc'
  },
  {
    title: 'ELDEN RING: SHADOW',
    subtitle: 'PRÓXIMO LANZAMIENTO',
    description: 'Álzate, Sinluz, y reclama el poder del Círculo de Elden.',
    image: '/assets/img/hero-elden.jpg', // Nota la "/" al inicio
    accentColor: '#fbbf24'
  }
];

  currentIndex = 0;
  featuredGame = this.games[this.currentIndex];
  private intervalId: any;

  ngOnInit() {
    // Inicia el cambio automático cada 5 segundos
    this.startSlider();
  }

  ngOnDestroy() {
    // Limpia el temporizador para evitar fugas de memoria
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startSlider() {
    this.intervalId = setInterval(() => {
      this.nextGame();
    }, 5000);
  }

  nextGame() {
    this.currentIndex = (this.currentIndex + 1) % this.games.length;
    this.featuredGame = this.games[this.currentIndex];
  }

  // Permite el cambio manual al hacer clic
  changeGame() {
    if (this.intervalId) clearInterval(this.intervalId); // Reinicia el tiempo si el usuario hace clic
    this.nextGame();
    this.startSlider();
  }
}