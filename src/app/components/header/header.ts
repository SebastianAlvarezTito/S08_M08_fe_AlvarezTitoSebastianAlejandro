import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  // Lista dinámica para el menú de navegación (Cumple con el requisito de ngFor)
  navLinks = [
    { name: 'Inicio', link: '#' },
    { name: 'Catálogo', link: '#catalog' },
    { name: 'Beneficios', link: '#benefits' },
    { name: 'Contacto', link: '#contact' }
  ];

  // Variable para simular estado de sesión
  isLoggedIn = false;

  login() {
    this.isLoggedIn = true;
    alert('¡Bienvenido a Alvarez Games!');
  }
}