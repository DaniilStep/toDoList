import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { PanelService } from '../../services/panel.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsRoutingModule } from './settings-routing.module';



@NgModule({
	declarations: [
		SettingsComponent
  ],
  imports: [
	  CommonModule,
	  FormsModule,
	  ReactiveFormsModule,
	  SettingsRoutingModule
	],
  providers: [
		PanelService
	]
})
export class SettingsModule { }
