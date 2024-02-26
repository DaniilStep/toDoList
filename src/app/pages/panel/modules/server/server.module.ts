import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerComponent } from './server.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '../../../../ui/button/button.module';
import { ServerApiService } from './api/server-api.service';



@NgModule({
	declarations: [
	  ServerComponent
  ],
  imports: [
	  CommonModule,
	  FormsModule,
	  ButtonModule,
	],
	exports: [
	  ServerComponent,
	],
	providers: [
		ServerApiService,
	]
})
export class ServerModule { }
