import { Component } from '@angular/core';
import {CITIES} from './cityList/cityMOCK';
import {CITY} from './cityList/city';

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

  constructor() {}

}
