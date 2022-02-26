import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()

export class EmpleadosService{

    /*El constructor instancia el servicioVentanaEmergente
    de la clase ServicioEmpleadosService*/
constructor(private servicioVentanaEmergente:ServicioEmpleadosService){

    }

    listaDeEmpleados:Empleado[] = [

        new Empleado("Nombre1 ","Apellido1 ","CEO ",25_000),
        new Empleado("Nombre2 ","Apellido2 ","Co-Founder ",24_000),
        new Empleado("Nombre3 ","Apellido3 ","Assistant Manager ",22_000),
        new Empleado("Nombre4 ","Apellido4 ","Assistant Manager ",21_000),
      ];
      
    agregarEmpleadoServicio(empleado:Empleado){
        this.servicioVentanaEmergente.muestraMensaje("persona que se va a agregar:"
        +"\n"+empleado.nombre+"\n"+"salario "
        +empleado.salario);

        this.listaDeEmpleados.push(empleado);
      }
      encontrarEmpleado(indice:number){
        let empleado:Empleado=this.listaDeEmpleados[indice];
        return empleado;
      }
      actualizaEmpleado(indice:number,empleado:Empleado){
        let empleadoModificado=this.listaDeEmpleados[indice];
        empleadoModificado.nombre=empleado.nombre;
        empleadoModificado.apellido=empleado.apellido;
        empleadoModificado.cargo=empleado.cargo;
        empleadoModificado.salario=empleado.salario;
      }

      eliminarEmpleado(indice:number){
        this.listaDeEmpleados.splice(indice,1);
      }

}