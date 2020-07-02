import { Component, OnInit } from '@angular/core';
import {WxServiceService as WxService} from '../wx-service.service';

@Component({
  selector: 'app-parent',
  template: '<app-form (eventEmitter)="getWeatherByCity($event)"></app-form>' + '<app-results [currentWeather]="currentWeather"></app-results>',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private wxService: WxService) { }
  currentWeather: any;
  city: string;


  // tslint:disable-next-line:typedef
  getWeatherByCity(cityName: string) {
    this.wxService.getWeatherByCity(cityName).subscribe(
      response => {
        this.currentWeather = response['cityData']['main']['temp'];
      }
    );
  }

  ngOnInit(): void {
  }

}
