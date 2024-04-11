import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceComponent } from './finance.component';
import { ButtonModule } from '../../ui/button/button.module';
import { FormsModule } from '@angular/forms';
import { FinanceApiService } from './api/finance-api.service';



@NgModule({
  declarations: [
    FinanceComponent
  ],
  imports: [
    CommonModule,
	 FinanceRoutingModule,
	 ButtonModule,
	  FormsModule,
	],
	providers: [
	  FinanceApiService,
  ]
})
export class FinanceModule { }
