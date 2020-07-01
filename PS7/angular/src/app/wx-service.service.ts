import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WxServiceService {

  constructor(private http: HttpClient) { }

  getWeather() {
    return this.http.get(`http://localhost:3000/weather/miami`);
  }
}
