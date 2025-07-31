import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit {
  public event!: any;
  private id!: number;
  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    console.log('EventDetailComponent constructor');
  }
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.eventService.getEventById(this.id).subscribe((res: any) => {
      console.log(res);
      this.event = res;
    });
  }
  bookSeat() {
    this.router.navigate([`/events/${this.id}/book-seat`]);
  }
  backToList() {
    this.router.navigate(['/events']);
  }
}
