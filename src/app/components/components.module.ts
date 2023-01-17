import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumbersSelectComponent } from './numbers-select/numbers-select.component';
import { AnalyzesComponent } from './analyzes/analyzes.component';
import { AnalyzesNumberComponent } from './analyzes-number/analyzes-number.component';
import { AnalyzesNeighborComponent } from './analyzes-neighbor/analyzes-neighbor.component';

@NgModule({
  declarations: [
    NumbersSelectComponent,
    AnalyzesComponent,
    AnalyzesNumberComponent,
    AnalyzesNeighborComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumbersSelectComponent,
    AnalyzesComponent,
    AnalyzesNumberComponent,
    AnalyzesNeighborComponent
  ]

})
export class ComponentsModule { }
