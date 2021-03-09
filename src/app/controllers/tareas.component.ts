import { Component } from '@angular/core';
import { Tareas } from '../models/tareas.model'
import { Trabajador } from '../models/trabajador.model'

@Component({
    selector: 's-tareas',
    templateUrl: '../views/tareas.component.html',
    styleUrls: ['../styles/tareas.component.sass']
})
export class tareasComponent {
    public tareas:Array<Tareas>
    public search:boolean
    public color:string

    constructor(){
        this.tareas = [
            new Tareas('Jardineria', 'Cortar cesped', [
                new Trabajador('Alberto', 'Ortiz', 56, 'Consejal', false),
                new Trabajador('Natalia', 'Ortiz', 27, 'Vendedora', true),
                new Trabajador('Eddie', 'Ojeda', 29, 'Manager', true),
                new Trabajador('Juan', 'Perez', 36, 'Reponedor', false)
            ], false, 'red'),
            new Tareas('Carpinteria', 'Construir Mesa', [
                new Trabajador('Julian', 'Ortiz', 56, 'Consejal', false),
                new Trabajador('Natalia', 'Ortiz', 27, 'Vendedora', false),
                new Trabajador('Ruben', 'Ojeda', 29, 'Manager', true),
                new Trabajador('Juan', 'Perez', 36, 'Reponedor', false)
            ], false, 'blue')
        ]
        this.search = false;
        this.color = 'red'
    }

    colorSwap(event: Event) {
        this.color = (<HTMLTextAreaElement>event.target).name
    }
}
