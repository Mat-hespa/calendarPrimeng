import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarGComponent } from './calendar-g/calendar-g.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { CalendarModule } from 'primeng/calendar';




@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    CalendarGComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
