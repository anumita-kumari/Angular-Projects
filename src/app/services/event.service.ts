import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Booking {
  id?: number;
  fullName: string;
  email: string;
  phoneNumber?: string;
  eventId: number;
  numberOfTickets: number;
  notes?: string;
  bookingDate: string;
  termsAccepted: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class EventService {
  private baseUrl = 'http://localhost:3000';

  constructor(public httpService: HttpClient) {}

  getEventList(): Observable<any> {
    //let apiURL = this.baseUrl + 'dataList';
    return this.httpService.get('http://localhost:3000/dataList', {
      responseType: 'json',
    });
  }
  getEventById(id: number): Observable<any> {
    return this.httpService.get(`http://localhost:3000/dataList/${id}`, {
      responseType: 'json',
    });
  }
  bookEvent(booking: Booking): Observable<any> {
    return this.httpService.post<Booking>(
      'http://localhost:3000/bookings',
      booking
    );
  }
  fetchBookingDetails(): Observable<Booking> {
    return this.httpService.get<Booking>('http://localhost:3000/bookings');
  }
}
