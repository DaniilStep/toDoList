import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import { MaterialComponent } from './material.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CarouselModule } from './modules/carousel/carousel.module';




@NgModule({
	declarations: [
		MaterialComponent,
  ],
  imports: [
    CommonModule,
	  MaterialRoutingModule,
	  MatCheckboxModule,
	  MatCardModule,
	  MatButtonModule,
	  CarouselModule
  ]
})
export class MaterialModule { }
