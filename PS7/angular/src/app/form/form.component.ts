import {Component, OnInit} from '@angular/core';
import {WxServiceService as WxService} from '../wx-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private wxService: WxService) {
  }

  city: any;

  currentWeather: any;

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getWeatherByCity() {
    this.wxService.getWeatherByCity(this.city).subscribe(
      response => {
        this.currentWeather = response['cityData']['main']['temp'];
      }
    );
  }
}
