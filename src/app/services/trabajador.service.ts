import { Injectable } from '@angular/core'
import { Trabajador } from '../models/trabajador.model'

@Injectable()

export class trabajadorService{
    public workers:Array<Trabajador>

    constructor(){
        this.workers = [
            new Trabajador('Manuel', 'Gomez', 35, 'Jardinero', true),
            new Trabajador('Carolina', 'Martinez', 42, 'Cocinera', false),
            new Trabajador('Esteban', 'Lopez', 23, 'Pinche', false),
            new Trabajador('Julio', 'Baptista', 40, 'Delantero', true),
            new Trabajador('Joaquin', 'Prats', 55, 'periodista', false),
            new Trabajador('Manuel', 'Gomez', 35, 'Jardinero', true),
            new Trabajador('Carolina', 'Martinez', 42, 'Cocinera', false),
            new Trabajador('Esteban', 'Lopez', 23, 'Pinche', false),
            new Trabajador('Julio', 'Baptista', 40, 'Delantero', true),
            new Trabajador('Joaquin', 'Prats', 55, 'periodista', false)
        ]
    }

    getWorkers(){
        return this.workers
    }
}