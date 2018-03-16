import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { UserComponent } from '../user/user.component';
import { BandComponent } from '../band/band.component';
import { ScheduleComponent } from '../schedule/schedule.component';
import { ScheduleEventComponent } from '../schedule-event/schedule-event.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'user', component: UserComponent },
  { path: 'band', component: BandComponent },
  { path: 'schedule', component: ScheduleComponent }
  { path: 'scheduleEvent/:id', component: ScheduleEventComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}