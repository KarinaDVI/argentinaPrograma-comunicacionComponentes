import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent implements OnInit {
  @Input() empleadoDeLista!:Empleado;
  @Input() indice!:number;

  caracteristica:string;
  arrayCaracteristicas = [''];
  key:number;

  agregarCaracteristica(nuevaCaracteristica:string){
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }
  //mio
  borrarCaracteristicas(value:string){
    
    this.arrayCaracteristicas.forEach((item:string, index:number) => {
      if(item === value) this.arrayCaracteristicas.
      splice(index,1);});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
