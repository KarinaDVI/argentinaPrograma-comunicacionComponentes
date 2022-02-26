import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';


@Component({
  selector: 'app-actualiza-componentes',
  templateUrl: './actualiza-componentes.component.html',
  styleUrls: ['./actualiza-componentes.component.css']
})
export class ActualizaComponentesComponent implements OnInit {
  empleados: Empleado[]=[];
  accion:Number;
  //Objetos del DOM
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
  indice:number;

  constructor(private router:Router,private miServicio:ServicioEmpleadosService,
    private empleadosService:EmpleadosService,private route:ActivatedRoute) {
    //ActivatedRoute carga las rutas activas
      
   }

  ngOnInit(): void {
    this.accion=parseInt(this.route.snapshot.queryParams['accion']);

    this.empleados=this.empleadosService.listaDeEmpleados;
    this.indice=this.route.snapshot.params['id'];
    let empleado:Empleado=this.empleadosService.encontrarEmpleado(this.indice);
    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario;

  }
  volverHome(){
    this.router.navigate(['']);
  }
/* 
actualizaEmpleado(){
  let nuevoEmpleado = new Empleado(this.cuadroNombre+" ",this.cuadroApellido+" ",this.cuadroCargo+" ",this.cuadroSalario);
  
  //Línea de abajo comentada por pasar funcionalidad de
  ServicioEmpleadosService a empleadosService

  //this.miServicio.muestraMensaje("Nombre del empleado:"
  +nuevoEmpleado.nombre+nuevoEmpleado.apellido);
  
  this.empleadosService.actualizaEmpleado(this.indice,nuevoEmpleado);
  //this.empleados.push(nuevoEmpleado);
  this.router.navigate(['']);
}*/

  
  eliminaEmpleado(){
    
    this.empleadosService.eliminarEmpleado(this.indice);
    //this.empleados.push(nuevoEmpleado);
    this.router.navigate(['']);

  }

  actualizaEmpleado(){
    if(this.accion==1){
    let nuevoEmpleado = new Empleado(this.cuadroNombre+" ",this.cuadroApellido+" ",this.cuadroCargo+" ",this.cuadroSalario);
    
    /*Línea de abajo comentada por pasar funcionalidad de
    ServicioEmpleadosService a empleadosService*/
  
    /*this.miServicio.muestraMensaje("Nombre del empleado:"
    +nuevoEmpleado.nombre+nuevoEmpleado.apellido);*/
    
    this.empleadosService.actualizaEmpleado(this.indice,nuevoEmpleado);
    //this.empleados.push(nuevoEmpleado);
    this.router.navigate(['']);
    }else{
    this.empleadosService.eliminarEmpleado(this.indice);
    this.router.navigate(['']);
  }
  



}
}
