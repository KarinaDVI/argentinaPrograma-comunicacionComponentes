import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  titulo = 'Comunicacion de Componentes';
 
 //Creado al crear servicios
  constructor(private miServicio:ServicioEmpleadosService,
    private empleadosService:EmpleadosService) { 
       //this.empleados=this.empleadosService.listaDeEmpleados;
      /* ^Este^, está comentado para mostrar 
      el funcionamiento mediante el método OnInit*/
    }

 //Implementación del método OnInit
 ngOnInit(): void {
  this.empleados=this.empleadosService.listaDeEmpleados;
}
empleados:Empleado[] = []
  
agregarEmpleado(){
  let nuevoEmpleado = new Empleado(this.cuadroNombre+" ",this.cuadroApellido+" ",this.cuadroCargo+" ",this.cuadroSalario);
  
  /*Línea de abajo comentada por pasar funcionalidad de
  ServicioEmpleadosService a empleadosService*/

  //this.miServicio.muestraMensaje("Nombre del empleado:"+nuevoEmpleado.nombre+nuevoEmpleado.apellido); 
  
  this.empleadosService.agregarEmpleadoServicio(nuevoEmpleado);
  //this.empleados.push(nuevoEmpleado);

}
//Objetos del DOM
cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0;


}
