import { Component } from '@angular/core';
import {WxServiceService as WxService} from './wx-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather App';
  currentWeather: any;

  constructor(private wxService: WxService) {}

  getWeather() {
    this.wxService.getWeather().subscribe(
      response => {
        this.currentWeather = response["cityData"]["main"]["temp"] + " degrees";
        console.log(this.currentWeather);
      }
    );
  }
}
