import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from './ui/header/header.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
   BrowserModule,
	AppRoutingModule,
	FormsModule,
	ReactiveFormsModule,
	HttpClientModule,
	HeaderModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
