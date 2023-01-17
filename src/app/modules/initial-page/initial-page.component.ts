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
  @ViewChild('analyzes_last_numbers') public analyzes_last_numbers: any;
  @ViewChild('analyzes_neighbor') public analyzes_neighbor: any;

  constructor() { }

  ngOnInit(): void {
  }

  getNumber = (number: Object) => {
    this.sequenceNumbers.unshift(number);
    this.analyzes.analyzing_numbers();
    this.analyzes_numbers.analyzes_numbers();
    this.analyzes_neighbor.analyzes_numbers();
    this.analyzes_last_numbers.analyzes_numbers();
  }

}
