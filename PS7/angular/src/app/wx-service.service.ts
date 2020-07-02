import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WxServiceService {

  baseURL: string = 'http://localhost:3000/weather/';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getWeather() {
    return this.http.get(`${this.baseURL}boston`);
  }

  // tslint:disable-next-line:typedef
  getWeatherByCity(city: string) {
    return this.http.get(`${this.baseURL}${city}`);
  }
}
