import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private baseUrl = 'http://localhost:3000';

  constructor(public httpService: HttpClient) {}

  getEventList() {
    let apiURL = this.baseUrl + 'dataList';
    this.httpService
      .get('http://localhost:3000/dataList', { responseType: 'text' })
      .subscribe((res) => {
        console.log(res);
      });
  }
}
