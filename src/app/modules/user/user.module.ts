import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { BookingListComponent } from './booking-list/booking-list.component';

const userRoute: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  { path: 'booking-list', component: BookingListComponent },
  { path: 'booking-details', component: BookingDetailsComponent },
];

@NgModule({
  declarations: [BookingDetailsComponent, UserComponent, BookingListComponent],
  imports: [CommonModule, RouterModule.forChild(userRoute)],
})
export class UserModule {}
