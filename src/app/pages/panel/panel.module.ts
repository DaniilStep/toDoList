import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelService } from './services/panel.service';
import { ItemComponent } from './modules/item/item.component';
import { ItemModule } from './modules/item/item.module';


@NgModule({
    declarations: [
		PanelComponent,
    ],
    providers: [
        PanelService
    ],
    imports: [
        CommonModule,
        PanelRoutingModule,
		 FormsModule,
		  ReactiveFormsModule,
		  ItemModule,
	],
})
export class PanelModule { }
