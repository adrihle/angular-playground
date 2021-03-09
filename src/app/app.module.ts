//begin of auto imports from new_component.py
import { homeComponent } from './controllers/home.component'
import { tareasComponent } from './controllers/tareas.component'
// end auto imported
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { NavbarComponent }  from './controllers/navbar.component'
import { TrabajadorComponent } from './controllers/trabajador.component'

@NgModule({
  declarations: [
    homeComponent, // auto imported component
    tareasComponent, // auto imported component
    AppComponent,
    TrabajadorComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent, 
    NavbarComponent
  ]
})
export class AppModule { }
