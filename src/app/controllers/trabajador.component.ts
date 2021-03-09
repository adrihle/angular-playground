import { Component } from '@angular/core'
import { Trabajador } from '../models/trabajador.model'
import { trabajadorService } from '../services/trabajador.service'

//declaramos el componente
@Component({
    selector: 'trabajador',
    templateUrl: '../views/trabajador.component.html',
    styleUrls: ['../styles/trabajador.component.sass'],
    providers: [trabajadorService]
})

export class TrabajadorComponent{
    public worker:Array<Trabajador> = []
    public search:boolean

    constructor(private _trabajadorService:trabajadorService){
        this.search = true
    }

    ngOnInit(){
        this.worker = this._trabajadorService.getWorkers()
    }

    filtro = (arr:Array<Trabajador>) => arr.filter(item => {return item.hired===this.search})  
    
    toggle = () => this.search = !this.search
}