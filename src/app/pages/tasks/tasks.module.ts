import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { ButtonModule } from '../../ui/button/button.module';
import { TasksComponent } from './tasks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskApiService } from './api/task-api.service';
import { LoadingModule } from '../../ui/loading/loading.module';


@NgModule({
	declarations: [
	  TasksComponent,
  ],
  imports: [
    CommonModule,
	 TasksRoutingModule,
	 ButtonModule,
	  FormsModule,
	  ReactiveFormsModule,
	  LoadingModule
	],
	exports: [
	  TasksComponent
	],
	providers: [
		TaskApiService
	]
})
export class TasksModule { }
