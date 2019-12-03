import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name = '';
  content = '';
  testA = '齁齁齁';
}
