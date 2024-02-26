import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PressButtonComponent } from './press-button.component';



@NgModule({
	declarations: [
	  PressButtonComponent,
  ],
  imports: [
    CommonModule
	],
	exports: [
	  PressButtonComponent,
  ]
})
export class PressButtonModule { }
