import { Component, OnInit } from '@angular/core';
import { stationList } from './station-list.const';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {
  list = stationList;
  constructor() { }

  ngOnInit() {
  }

}
