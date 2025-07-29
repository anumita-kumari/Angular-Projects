import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  public eventList!: any;
  public dataSource: any;
  public displayedColumns: string[] = [
    'id',
    'title',
    'description',
    'category',
    'date',
    'location',
    'organizer',
    'availableSeats',
  ];
  constructor(private eventService: EventService) {}
  ngOnInit(): void {
    this.eventList = this.eventService.getEventList();
    this.dataSource = this.eventList;
  }
}
