import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import  timeGridPlugin  from '@fullcalendar/timegrid';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin, { Draggable } from '@fullcalendar/interaction'; // a plugin
import { HomeComponent } from './componenets/home/home.component'; 
import { FormsModule } from '@angular/forms';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    HttpClientModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }