export class Empleado {

    nombre: string;
    apellido: string;
    cargo: string;
    salario:number;
    
    constructor(nombre:string="",apellido:string="",cargo:string="",salario:number=0){
        this.nombre=nombre;
        this.apellido=apellido;
        this.cargo=cargo;
        this.salario=salario;
    }
    
}
