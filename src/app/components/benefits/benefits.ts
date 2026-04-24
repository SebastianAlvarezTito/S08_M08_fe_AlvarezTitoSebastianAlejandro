import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './benefits.html',
  styleUrl: './benefits.css'
})
export class BenefitsComponent {
  // Lista de beneficios clave de la plataforma
  benefits = [
    {
      icon: '🚀',
      title: 'Acceso Anticipado',
      description: 'Juega los títulos más esperados semanas antes de su lanzamiento oficial.'
    },
    {
      icon: '🛡️',
      title: 'Seguridad Total',
      description: 'Tus transacciones y datos están protegidos con encriptación de nivel militar.'
    },
    {
      icon: '💎',
      title: 'Recompensas VIP',
      description: 'Acumula puntos por cada compra y canjéalos por expansiones y skins exclusivas.'
    },
    {
      icon: '🌐',
      title: 'Comunidad Global',
      description: 'Conéctate con millones de jugadores y participa en torneos internacionales.'
    }
  ];
}