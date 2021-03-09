import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as components from './components'

const routes: Routes = [
  {
    path: 'home',
    component: components.homeComponent,
  },
  {
    path: 'lista',
    component: components.TrabajadorComponent
  },
  {
    path: 'tareas',
    component: components.tareasComponent
  },
  {
    path: '**',
    component: components.Base
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
