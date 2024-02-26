import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { ButtonModule } from '../../ui/button/button.module';
import { TasksComponent } from './tasks.component';
import { FormsModule } from '@angular/forms';


@NgModule({
	declarations: [
	  TasksComponent,
  ],
  imports: [
    CommonModule,
	 TasksRoutingModule,
	 ButtonModule,
	 FormsModule,
  ]
})
export class TasksModule { }
