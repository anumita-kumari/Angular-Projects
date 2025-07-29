import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private baseUrl = 'http://localhost:3000';
  constructor(public httpService: HttpClient) {}

  getEventList() {
    this.httpService.get(this.baseUrl).subscribe((res) => {
      console.log(res);
    });
  }
}
