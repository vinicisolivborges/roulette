import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitialPageRoutingModule } from './initial-page-routing.module';
import { InitialPageComponent } from './initial-page.component';


import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    InitialPageComponent
  ],
  imports: [
    CommonModule,
    InitialPageRoutingModule,
    ComponentsModule
  ],
  exports: [
    InitialPageComponent
  ]
})
export class InitialPageModule { }
