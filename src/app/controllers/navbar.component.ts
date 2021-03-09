import { Component } from '@angular/core'
import { Navbar } from '../models/navbar.model'

//component definition
@Component({
    selector: "cnav",
    templateUrl: '../views/navbar.component.html',
    styleUrls: ['../styles/navbar.component.sass']
})

export class NavbarComponent{
    public nameComponent = 'NavBar'
    public navbar:Navbar

    //metodo que inicia al instanciarse la clase
    constructor(){
        this.navbar = new Navbar('Home', 'Menu', 'Trabajadores', 'Tareas');
    }
}