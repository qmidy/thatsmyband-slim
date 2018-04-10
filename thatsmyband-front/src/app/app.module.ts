import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BandComponent } from './band/band.component';
import { ScheduleComponent } from './schedule/schedule.component';

import { UserService } from './service/user.service';
import { FacebookService } from './service/facebook.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { ScheduleEventComponent } from './schedule-event/schedule-event.component';
import { ScheduleNewEventComponent } from './schedule-new-event/schedule-new-event.component';
import { ScheduleRunEventComponent } from './schedule-run-event/schedule-run-event.component';
import { AboutComponent } from './about/about.component';
import { FooterInfoComponent } from './footer-info/footer-info.component';
import { NotConnectedComponent } from './not-connected/not-connected.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BandComponent,
    ScheduleComponent,
    ScheduleEventComponent,
    ScheduleNewEventComponent,
    ScheduleRunEventComponent,
    AboutComponent,
    FooterInfoComponent,
    NotConnectedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService, FacebookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
