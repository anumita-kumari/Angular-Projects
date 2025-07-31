import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventListComponent implements OnInit, AfterViewInit {
  public eventList!: any;
  public dataSource: any = new MatTableDataSource<any>([]);
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

  totalItems!: number; // Example: total number of items
  pageSize = 5; // Example: items per page
  pageSizeOptions: number[] = [5, 10];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    //data should come from service in eventList variable

    this.eventService.getEventList().subscribe((res: any) => {
      //subscribe to the observable returned by the service
      //and assign the result to eventList variable
      console.log(res);
      this.eventList = res;
      this.dataSource = this.eventList;
      this.totalItems = this.eventList.length; // Set total items for pagination
    });
  }
}
