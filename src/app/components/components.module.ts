import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumbersSelectComponent } from './numbers-select/numbers-select.component';
import { AnalyzesComponent } from './analyzes/analyzes.component';

@NgModule({
  declarations: [
    NumbersSelectComponent,
    AnalyzesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumbersSelectComponent,
    AnalyzesComponent
  ]

})
export class ComponentsModule { }
