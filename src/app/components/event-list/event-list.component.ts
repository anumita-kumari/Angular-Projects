import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  public eventList!: any;
  constructor(private eventService: EventService) {}
  ngOnInit(): void {
    this.eventList = this.eventService.getEventList();
  }
}
