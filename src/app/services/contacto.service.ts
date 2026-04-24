import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto } from '../models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private apiUrl = 'http://localhost:8080/api/contactos';

  constructor(private http: HttpClient) { }

  // Listar todos (GET)
  listar(): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(this.apiUrl);
  }

  // Guardar (POST)
  registrar(contacto: Contacto): Observable<Contacto> {
    return this.http.post<Contacto>(this.apiUrl, contacto);
  }

  // Eliminar (DELETE)
  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Actualizar (PUT)
  actualizar(id: number, contacto: Contacto): Observable<Contacto> {
    return this.http.put<Contacto>(`${this.apiUrl}/${id}`, contacto);
  }
}