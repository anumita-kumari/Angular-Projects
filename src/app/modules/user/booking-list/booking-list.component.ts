import { Component, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { EventService, Booking } from 'src/app/services/event.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css'],
})
export class BookingListComponent implements OnInit {
  public dataSource: any = new MatTableDataSource<Booking>([]);

  public displayedColumns: String[] = [
    'fullName',
    'email',
    'phoneNumber',
    'bookingDate',
    'notes',
    'numberOfTickets',
  ];
  constructor(private eventService: EventService) {}
  ngOnInit() {
    this.eventService.fetchBookingDetails().subscribe((res: Booking) => {
      console.log(res);
      this.dataSource = res;
    });
  }
}
