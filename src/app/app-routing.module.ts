import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { FormUserComponent } from './components/form-user/form-user.component';

const routes: Routes = [
  { path: 'user-list', component: UserListComponent },
  { path: 'form-user', component: FormUserComponent },
  { path: '', component: UserListComponent }, // No redirigir a ninguna ruta por defecto
  { path: '**', redirectTo: '', pathMatch: 'full' } // Ruta comodín para rutas no definidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
