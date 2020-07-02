import { Component } from '@angular/core';
import {WxServiceService as WxService} from './wx-service.service';
import {CITIES} from './data/cityMOCK';
import {CITY} from './data/city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather App';
  currentWeather: any;

  locations: CITY[] = CITIES;
  selectedLocation: CITY;

  constructor(private wxService: WxService) {}

  // tslint:disable-next-line:typedef
  getWeather() {
    this.wxService.getWeather().subscribe(
      response => {
        this.currentWeather = response["cityData"]["main"]["temp"] + ' degrees';
        console.log(this.currentWeather);
      }
    );
  }
}
