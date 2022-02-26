import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {
  empleados: Empleado[]=[];

  constructor(private router:Router,private miServicio:ServicioEmpleadosService,
    private empleadosService:EmpleadosService) {
    
   }

  ngOnInit(): void {
    this.empleados=this.empleadosService.listaDeEmpleados;

  }
volverHome(){
  this.router.navigate(['']);
}
agregarEmpleado(){
  let nuevoEmpleado = new Empleado(this.cuadroNombre+" ",this.cuadroApellido+" ",this.cuadroCargo+" ",this.cuadroSalario);
  
  /*Línea de abajo comentada por pasar funcionalidad de
  ServicioEmpleadosService a empleadosService*/

  //this.miServicio.muestraMensaje("Nombre del empleado:"+nuevoEmpleado.nombre+nuevoEmpleado.apellido); 
  
  this.empleadosService.agregarEmpleadoServicio(nuevoEmpleado);
  //this.empleados.push(nuevoEmpleado);
  this.router.navigate(['']);
}
//Objetos del DOM
cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0;


}
