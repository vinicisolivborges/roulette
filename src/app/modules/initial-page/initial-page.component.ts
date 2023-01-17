import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss']
})
export class InitialPageComponent implements OnInit {

  public sequenceNumbers: Array<Object> = [];

  @ViewChild('analyzes') public analyzes: any;
  @ViewChild('analyzes_numbers') public analyzes_numbers: any;

  constructor() { }

  ngOnInit(): void {
  }

  getNumber = (number: Object) => {
    this.sequenceNumbers.unshift(number);
    this.analyzes.analyzing_numbers();
    this.analyzes_numbers.analyzes_numbers();
  }

}