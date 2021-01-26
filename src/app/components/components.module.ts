import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputOutputComponent } from './input-output/input-output.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputOutputComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    InputOutputComponent
  ]
})
export class ComponentsModule { }
