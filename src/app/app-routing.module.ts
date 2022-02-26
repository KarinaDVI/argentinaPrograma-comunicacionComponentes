import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponentesComponent } from './actualiza-componentes/actualiza-componentes.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';

const routes: Routes = [
//Original del video de pildoras
//{path:'',component:HomeComponentComponent},

//argentinaPrograma:
{path:'', redirectTo: '/home',pathMatch:'full'},

//Enlace al home:
{path:'home',component:HomeComponentComponent},
{path:'proyectos',component:ProyectosComponentComponent},
{path:'quienes',component:QuienesComponentComponent},
{path:'contactos',component:ProyectosComponentComponent},
{path:'actualiza/:id',component:ActualizaComponentesComponent},
{path:'**',component:ErrorPersonalizadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
