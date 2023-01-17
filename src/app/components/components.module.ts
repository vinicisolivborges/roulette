import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumbersSelectComponent } from './numbers-select/numbers-select.component';
import { AnalyzesComponent } from './analyzes/analyzes.component';
import { AnalyzesNumberComponent } from './analyzes-number/analyzes-number.component';

@NgModule({
  declarations: [
    NumbersSelectComponent,
    AnalyzesComponent,
    AnalyzesNumberComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumbersSelectComponent,
    AnalyzesComponent,
    AnalyzesNumberComponent
  ]

})
export class ComponentsModule { }
