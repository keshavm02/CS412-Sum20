import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
  @Output() eventEmitter: EventEmitter<any> = new EventEmitter<any>();

  currentWeather: any;

  // tslint:disable-next-line:typedef
  emitEvent() {
    this.eventEmitter.emit(this.city);
  }

  ngOnInit(): void {
  }

}
