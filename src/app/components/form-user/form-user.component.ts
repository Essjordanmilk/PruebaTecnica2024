import { Component } from '@angular/core';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  adress: string = '';

  constructor() {}

  validateForm() {
    if (!this.name || !this.email || !this.phone || !this.adress) {
      Swal.fire({
        title: 'Error!',
        text: 'Por favor, complete todos los campos.',
        icon: 'error',
        confirmButtonText: 'Entendido'
      })
      return false;
    }

    // Validación de correo electrónico
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    
    if (!emailPattern.test(this.email)) {
      Swal.fire({
        title: 'Error!',
        text: 'Por favor, ingrese un correo electrónico válido.',
        icon: 'error',
        confirmButtonText: 'Entendido'
      })
      return false;
    }

    // Validación de número de teléfono
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(this.phone)) {
      Swal.fire({
        title: 'Error!',
        text: 'Por favor, ingrese un número de teléfono válido (10 dígitos).',
        icon: 'error',
        confirmButtonText: 'Entendido'
      })
      return false;
    }

    Toast.fire({
      icon: "success",
      title: "Formulario enviado exitosamente"
    });
    return true;
  }
}
