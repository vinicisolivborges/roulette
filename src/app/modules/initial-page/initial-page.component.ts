import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss']
})
export class InitialPageComponent implements OnInit {

  public sequenceNumbers: Array<any> = [];

  @ViewChild('analyzes') public analyzes: any;
  @ViewChild('analyzes_number') public analyzes_number: any;
  @ViewChild('analyzes_neighbor') public analyzes_neighbor: any;

  public analyzesNumber: Array<any> = [];
  public analyzesNeighbor: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

  getNumber = (number: Object) => {
    this.sequenceNumbers.unshift(number);
    this.analyzes.analyzing_numbers();
    this.analyzesNumber = this.analyzes_number.analyzes_numbers();
    this.analyzesNeighbor = this.analyzes_neighbor.analyzes_neighbors();
  }

  removeNumber = () => {
    this.sequenceNumbers.shift();
  }
}
