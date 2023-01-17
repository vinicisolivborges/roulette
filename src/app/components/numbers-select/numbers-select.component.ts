import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-numbers-select',
  templateUrl: './numbers-select.component.html',
  styleUrls: ['./numbers-select.component.scss']
})
export class NumbersSelectComponent implements OnInit {

  @Output() number = new EventEmitter<any>;

  /*##################################
    ##  Color: 0 Verde              ##
    ##         1 Vermelho           ##
    ##         2 Preto              ##
    ##                              ##
    ##  Section: 1 Voisins          ##
    ##           2 Orphelins        ##
    ##           3 Tiers            ##
    ##################################*/
  public numbers = [
    {
        number: 1
      , color: 1
      , section: 2
      , neighbor: [16,33,20,14]
      , column: 1
      , dozen: 1
      , high: 0
    },
    {
        number: 2
      , color: 2
      , section: 1
      , neighbor: [4, 21, 25, 17]
      , column: 2
      , dozen: 1
      , high: 0
    },
    {
        number: 3
      , color: 1
      , section: 1
      , neighbor: [26, 0, 35, 12]
      , column: 3
      , dozen: 1
      , high: 0
    },
    {
        number: 4
      , color: 2
      , section: 1
      , neighbor: [15, 19, 21, 2]
      , column: 1
      , dozen: 1
      , high: 0
    },
    {
        number: 5
      , color: 1
      , section: 3
      , neighbor: [23, 10, 24, 16]
      , column: 2
      , dozen: 1
      , high: 0
    },
    {
        number: 6
      , color: 2
      , section: 2
      , neighbor: [17, 34, 27,13]
      , column: 3
      , dozen: 1
      , high: 0
    },
    {
        number: 7
      , color: 1
      , section: 1
      , neighbor: [18, 29, 28, 12]
      , column: 1
      , dozen: 1
      , high: 0
    },
    {
        number: 8
      , color: 2
      , section: 3
      , neighbor: [11, 30, 23, 10]
      , column: 2
      , dozen: 1
      , high: 0
    },
    {
        number: 9
      , color: 1
      , section: 2
      , neighbor: [14, 31, 22, 18]
      , column: 3
      , dozen: 1
      , high: 0
    },
    {
        number: 10
      , color: 2
      , section: 3
      , neighbor: [8, 23, 5, 24]
      , column: 1
      , dozen: 1
      , high: 0
    },
    {
        number: 11
      , color: 2
      , section: 3
      , neighbor: [13, 36, 30, 8]
      , column: 2
      , dozen: 1
      , high: 0
    },
    {
        number: 12
      , color: 1
      , section: 1
      , neighbor: [7, 28, 35, 3]
      , column: 3
      , dozen: 1
      , high: 0
    },
    {
        number: 13
      , color: 2
      , section: 3
      , neighbor: [6, 27, 36, 11]
      , column: 1
      , dozen: 2
      , high: 0
    },
    {
        number: 14
      , color: 1
      , section: 2
      , neighbor: [1, 20, 31, 9]
      , column: 2
      , dozen: 2
      , high: 0
    },
    {
        number: 15
      , color: 2
      , section: 1
      , neighbor: [0, 32, 19, 4]
      , column: 3
      , dozen: 2
      , high: 0
    },
    {
        number: 16
      , color: 1
      , section: 3
      , neighbor: [5, 24, 33, 1]
      , column: 1
      , dozen: 2
      , high: 0
    },
    {
        number: 17
      , color: 2
      , section: 2
      , neighbor: [2, 25, 34, 6]
      , column: 2
      , dozen: 2
      , high: 0
    },
    {
        number: 18
      , color: 1
      , section: 1
      , neighbor: [9, 22, 29, 7]
      , column: 3
      , dozen: 2
      , high: 0
    },
    {
        number: 19
      , color: 1
      , section: 1
      , neighbor: [32, 15, 21, 2]
      , column: 1
      , dozen: 2
      , high: 1
    },
    {
        number: 20
      , color: 2
      , section: 2
      , neighbor: [33, 1, 14, 31]
      , column: 2
      , dozen: 2
      , high: 1
    },
    {
        number: 21
      , color: 1
      , section: 1
      , neighbor: [19, 4, 2, 25]
      , column: 3
      , dozen: 2
      , high: 1
    },
    {
        number: 22
      , color: 2
      , section: 1
      , neighbor: [31, 9, 18, 29]
      , column: 1
      , dozen: 2
      , high: 1
    },
    {
        number: 23
      , color: 1
      , section: 3
      , neighbor: [30, 8, 10, 5]
      , column: 2
      , dozen: 2
      , high: 1
    },
    {
        number: 24
      , color: 2
      , section: 3
      , neighbor: [10, 5, 16, 33]
      , column: 3
      , dozen: 2
      , high: 1
    },
    {
        number: 25
      , color: 1
      , section: 1
      , neighbor: [21, 2, 17, 34]
      , column: 1
      , dozen: 3
      , high: 1
    },
    {
        number: 26
      , color: 2
      , section: 1
      , neighbor: [35, 3, 0, 32]
      , column: 2
      , dozen: 3
      , high: 1
    },
    {
        number: 27
      , color: 1
      , section: 3
      , neighbor: [34, 6, 27, 13]
      , column: 3
      , dozen: 3
      , high: 1
    },
    {
        number: 28
      , color: 2
      , section: 1
      , neighbor: [29, 7, 12, 35]
      , column: 1
      , dozen: 3
      , high: 1
    },
    {
        number: 29
      , color: 2
      , section: 1
      , neighbor: [22, 18, 7, 28]
      , column: 2
      , dozen: 3
      , high: 1
    },
    {
        number: 30
      , color: 1
      , section: 3
      , neighbor: [36, 11, 8, 23]
      , column: 3
      , dozen: 3
      , high: 1
    },
    {
        number: 31
      , color: 2
      , section: 2
      , neighbor: [20, 14, 9, 22]
      , column: 1
      , dozen: 3
      , high: 1
    },
    {
        number: 32
      , color: 1
      , section: 1
      , neighbor: [26, 0, 15, 19]
      , column: 2
      , dozen: 3
      , high: 1
    },
    {
        number: 33
      , color: 2
      , section: 3
      , neighbor: [24, 16, 1, 20]
      , column: 3
      , dozen: 3
      , high: 1
    },
    {
        number: 34
      , color: 1
      , section: 2
      , neighbor: [25, 17, 6, 27]
      , column: 1
      , dozen: 3
      , high: 1
    },
    {
        number: 35
      , color: 2
      , section: 1
      , neighbor: [28, 12, 3, 26]
      , column: 2
      , dozen: 3
      , high: 1
    },
    {
        number: 36
      , color: 1
      , section: 3
      , neighbor: [27, 13, 11, 30]
      , column: 3
      , dozen: 3
      , high: 1
    },
  ]

  public number0 = {
      number: 0
    , color: 0
    , section: 1
    , neighbor: [3, 26, 32, 15]
  }

  constructor() { }

  ngOnInit(): void {
  }

  sendNumber = (number: Object) => {
    this.number.emit(number);
  }
}
