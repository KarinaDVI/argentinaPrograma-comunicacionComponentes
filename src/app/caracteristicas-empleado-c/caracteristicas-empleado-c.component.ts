import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {Output} from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent implements OnInit {
  @Output() caracteristicasEmpleados = new EventEmitter<string>();
  //Mio:
  @Input() borraCaracteristica:string;
  //mio:
  @Output() deleteRequest= new EventEmitter<string>();

  /*Esta linea de abajo se comentó porque se pasó la 
  funcionalidad del servicio ServicioEmpleadosService 
  a empleados.service*/
  
  //constructor(private miServicio:ServicioEmpleadosService) {
  //}

  ngOnInit(): void {
  }

  agregaCaracteristicas(value: string){
    //this.miServicio.muestraMensaje(value)
    this.caracteristicasEmpleados.emit(value);
  }
  quitarCaracteristicas(value:string){
    this.deleteRequest.emit(value);
  }
}
