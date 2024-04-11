import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import { MaterialComponent } from './material.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
	declarations: [
		MaterialComponent,
  ],
  imports: [
    CommonModule,
	  MaterialRoutingModule,
	  MatCheckboxModule,
	  MatCardModule,
	  MatButtonModule
  ]
})
export class MaterialModule { }
