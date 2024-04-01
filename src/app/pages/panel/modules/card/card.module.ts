import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelService } from '../../services/panel.service';
import { CardComponent } from './card.component';
import { CardRoutingModule } from './card-routing.module';



@NgModule({
	declarations: [
	  CardComponent
  ],
  imports: [
	  CommonModule,
	  CardRoutingModule
	],
	providers: [
	  PanelService
  ]
})
export class CardModule { }
