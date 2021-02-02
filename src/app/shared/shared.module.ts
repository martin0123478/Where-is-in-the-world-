import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from './components/menu/menu.component'
import { MaterialModule } from './../material/material.module'
import {RouterModule} from '@angular/router'
import {HeaderComponent}from './components/header/header.component'
@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
    
    
  ],
  exports:[
    MenuComponent,
    RouterModule,
    HeaderComponent
  ]
})
export class SharedModule { }
