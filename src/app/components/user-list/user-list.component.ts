import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

user?:any ; 
userId?: number; 
valor?:number; 

constructor(private userService: UserDataService){}


  ngOnInit(): void {
//obtienen la informacion de los primeros 5 usuarios
    this.userService.getUsers().subscribe((data:any) => {
      this.user = data;
      let filterData = this.filterUsers(this.user);
       console.table(filterData);
    },
  (error:any)=>{
    console.log('error'); 
  });

  }


  filterUserId() {
    // Verifica que valor tenga un valor numérico válido antes de realizar la petición
    if (this.valor) {
      this.userService.getUserId(this.valor).subscribe(
        (data: any) => {
          this.user = data;
          console.log('Usuario encontrado:', this.user);
        },
        (error: any) => {
          Swal.fire({
            title: 'Error!',
            text: 'Error al buscar (verifica la información).',
            icon: 'error',
            confirmButtonText: 'Entendido'
          })
        }
      );
    } else {
      console.error('ID de usuario no válido:', this.valor);
    }
  }

//funcion para filtrar la informacion de la respuesta
  filterUsers(users:any){
    return users.slice(0,5);
    }
}


 