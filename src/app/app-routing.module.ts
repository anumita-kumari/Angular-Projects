import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { EventListComponent } from './components/event-list/event-list.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'events', component: EventListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
