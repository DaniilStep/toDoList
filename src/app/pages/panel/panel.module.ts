import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { ButtonModule } from '../../ui/button/button.module';
import { PressButtonModule } from '../../ui/press-button/press-button.module';
import { FormsModule } from '@angular/forms';
import { FormModule } from './modules/form/form.module';
import { ServerModule } from './modules/server/server.module';
import { PanelService } from './services/panel.service';


@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    CommonModule,
	  PanelRoutingModule,
	  ButtonModule,
	  PressButtonModule,
	  FormsModule,
	  FormModule,
	  ServerModule,
	],
	providers: [
	  PanelService
  ]
})
export class PanelModule { }
