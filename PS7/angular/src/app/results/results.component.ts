import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('currentWeather') currentWeather: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
