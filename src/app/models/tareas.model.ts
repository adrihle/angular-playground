import { Trabajador } from './trabajador.model'

export class Tareas{
    constructor(
        public name:string,
        public description:string,
        public trabajadores_asignados:Array<Trabajador>,
        public terminado:boolean = false,
        public color:string
    ){}
}