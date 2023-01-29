import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumbersSelectComponent } from './numbers-select/numbers-select.component';
import { AnalyzesComponent } from './analyzes/analyzes.component';
import { SugestionComponent } from './sugestion/sugestion.component';

@NgModule({
  declarations: [
    NumbersSelectComponent,
    AnalyzesComponent,
    SugestionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumbersSelectComponent,
    AnalyzesComponent,
    SugestionComponent
  ]

})
export class ComponentsModule { }
