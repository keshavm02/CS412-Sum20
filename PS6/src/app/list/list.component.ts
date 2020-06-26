import { Component, OnInit } from '@angular/core';
import {LOCATIONS} from '../data/locationMOCK';
import {LOCATION} from '../data/location';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  locations: LOCATION[] = LOCATIONS;
  selectedLocation: LOCATION;
  constructor() { }

  ngOnInit(): void {
  }

  showData(nameOfLocation: string): void {
    this.selectedLocation = this.locations.find(loc => loc.name === nameOfLocation);
  }
}
