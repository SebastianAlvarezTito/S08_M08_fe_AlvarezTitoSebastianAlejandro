import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { ContactoService } from '../../services/contacto.service';
import { Contacto } from '../../models/contacto';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent implements OnInit {
  private contactoService = inject(ContactoService);
  private cdr = inject(ChangeDetectorRef);

  listado: Contacto[] = [];
  editando: boolean = false;
  
  contacto: Contacto = {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  };

  ngOnInit(): void {
    this.cargarContactos();
  }

  cargarContactos() {
    this.contactoService.listar().subscribe({
      next: (res) => {
        // Usamos el operador spread [...] para asegurar que Angular detecte el cambio de datos
        this.listado = [...res]; 
        this.cdr.detectChanges(); 
      },
      error: (err) => console.error('Error al cargar contactos:', err)
    });
  }

  onSubmit() {
    const operacion = (this.editando && this.contacto.id) 
      ? this.contactoService.actualizar(this.contacto.id, this.contacto)
      : this.contactoService.registrar(this.contacto);

    operacion.subscribe({
      next: () => {
        alert(this.editando ? '✅ Registro actualizado' : '🚀 Mensaje enviado');
        this.resetear(); // Limpia y recarga automáticamente
      },
      error: (err) => alert('❌ Error en la operación')
    });
  }

  borrar(id?: number) {
    if (id && confirm('¿Estás seguro de eliminar este registro?')) {
      this.contactoService.eliminar(id).subscribe({
        next: () => {
          this.cargarContactos();
        },
        error: (err) => alert('❌ No se pudo eliminar')
      });
    }
  }

  prepararEdicion(c: Contacto) {
    this.contacto = { ...c };
    this.editando = true;

    // SCROLL PRECISO: Lleva al usuario al formulario, no al inicio de la página
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  resetear() {
    this.contacto = { nombre: '', email: '', asunto: '', mensaje: '' };
    this.editando = false;
    this.cargarContactos();
  }
}