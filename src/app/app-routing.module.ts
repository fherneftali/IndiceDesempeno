import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearProyectoComponent } from './crear-proyecto/crear-proyecto.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginEmailComponent } from './login-email/login-email.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { RegistroUserComponent } from './registro-user/registro-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'loginCorreo', component: LoginEmailComponent },
  { path: 'registroUsuario', component: RegistroUserComponent },
  { path: 'crearProyecto', component: CrearProyectoComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'header', component: HeaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
