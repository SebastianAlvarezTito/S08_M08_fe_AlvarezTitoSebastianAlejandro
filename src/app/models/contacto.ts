export interface Contacto {
    id?: number;
    nombre: string;
    email: string;
    asunto: string;
    mensaje: string;
    fecha_registro?: string; // Opcional, para que no dé error si el backend lo envía
}