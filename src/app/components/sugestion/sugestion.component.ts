import { Component, Input, OnInit } from '@angular/core';
import { Numeros } from 'src/app/models/numeros';

@Component({
  selector: 'app-sugestion',
  templateUrl: './sugestion.component.html',
  styleUrls: ['./sugestion.component.scss']
})
export class SugestionComponent implements OnInit {

  @Input() sequenceNumbers: Array<any> = [];
  public sequencePull: Array<any> = [];

  public bestNumbers: Numeros = {
    color: -1,
    section: -1,
    dozen: [],
    odd: -1,
    high: -1
  }

  public numbers = [
    {
        number: 1
      , color: 1
      , section: 2
      , neighbor: [16,33,20,14]
      , column: 1
      , dozen: 1
      , high: 0
      , odd: 1
    },
    {
        number: 2
      , color: 2
      , section: 1
      , neighbor: [4, 21, 25, 17]
      , column: 2
      , dozen: 1
      , high: 0
      , odd: 0
    },
    {
        number: 3
      , color: 1
      , section: 1
      , neighbor: [26, 0, 35, 12]
      , column: 3
      , dozen: 1
      , high: 0
      , odd: 1
    },
    {
        number: 4
      , color: 2
      , section: 1
      , neighbor: [15, 19, 21, 2]
      , column: 1
      , dozen: 1
      , high: 0
      , odd: 0
    },
    {
        number: 5
      , color: 1
      , section: 3
      , neighbor: [23, 10, 24, 16]
      , column: 2
      , dozen: 1
      , high: 0
      , odd: 1
    },
    {
        number: 6
      , color: 2
      , section: 2
      , neighbor: [17, 34, 27,13]
      , column: 3
      , dozen: 1
      , high: 0
      , odd: 0
    },
    {
        number: 7
      , color: 1
      , section: 1
      , neighbor: [18, 29, 28, 12]
      , column: 1
      , dozen: 1
      , high: 0
      , odd: 1
    },
    {
        number: 8
      , color: 2
      , section: 3
      , neighbor: [11, 30, 23, 10]
      , column: 2
      , dozen: 1
      , high: 0
      , odd: 0
    },
    {
        number: 9
      , color: 1
      , section: 2
      , neighbor: [14, 31, 22, 18]
      , column: 3
      , dozen: 1
      , high: 0
      , odd: 1
    },
    {
        number: 10
      , color: 2
      , section: 3
      , neighbor: [8, 23, 5, 24]
      , column: 1
      , dozen: 1
      , high: 0
      , odd: 0
    },
    {
        number: 11
      , color: 2
      , section: 3
      , neighbor: [13, 36, 30, 8]
      , column: 2
      , dozen: 1
      , high: 0
      , odd: 1
    },
    {
        number: 12
      , color: 1
      , section: 1
      , neighbor: [7, 28, 35, 3]
      , column: 3
      , dozen: 1
      , high: 0
      , odd: 0
    },
    {
        number: 13
      , color: 2
      , section: 3
      , neighbor: [6, 27, 36, 11]
      , column: 1
      , dozen: 2
      , high: 0
      , odd: 1
    },
    {
        number: 14
      , color: 1
      , section: 2
      , neighbor: [1, 20, 31, 9]
      , column: 2
      , dozen: 2
      , high: 0
      , odd: 0
    },
    {
        number: 15
      , color: 2
      , section: 1
      , neighbor: [0, 32, 19, 4]
      , column: 3
      , dozen: 2
      , high: 0
      , odd: 1
    },
    {
        number: 16
      , color: 1
      , section: 3
      , neighbor: [5, 24, 33, 1]
      , column: 1
      , dozen: 2
      , high: 0
      , odd: 0
    },
    {
        number: 17
      , color: 2
      , section: 2
      , neighbor: [2, 25, 34, 6]
      , column: 2
      , dozen: 2
      , high: 0
      , odd: 1
    },
    {
        number: 18
      , color: 1
      , section: 1
      , neighbor: [9, 22, 29, 7]
      , column: 3
      , dozen: 2
      , high: 0
      , odd: 0
    },
    {
        number: 19
      , color: 1
      , section: 1
      , neighbor: [32, 15, 21, 2]
      , column: 1
      , dozen: 2
      , high: 1
      , odd: 1
    },
    {
        number: 20
      , color: 2
      , section: 2
      , neighbor: [33, 1, 14, 31]
      , column: 2
      , dozen: 2
      , high: 1
      , odd: 0
    },
    {
        number: 21
      , color: 1
      , section: 1
      , neighbor: [19, 4, 2, 25]
      , column: 3
      , dozen: 2
      , high: 1
      , odd: 1
    },
    {
        number: 22
      , color: 2
      , section: 1
      , neighbor: [31, 9, 18, 29]
      , column: 1
      , dozen: 2
      , high: 1
      , odd: 0
    },
    {
        number: 23
      , color: 1
      , section: 3
      , neighbor: [30, 8, 10, 5]
      , column: 2
      , dozen: 2
      , high: 1
      , odd: 1
    },
    {
        number: 24
      , color: 2
      , section: 3
      , neighbor: [10, 5, 16, 33]
      , column: 3
      , dozen: 2
      , high: 1
      , odd: 0
    },
    {
        number: 25
      , color: 1
      , section: 1
      , neighbor: [21, 2, 17, 34]
      , column: 1
      , dozen: 3
      , high: 1
      , odd: 1
    },
    {
        number: 26
      , color: 2
      , section: 1
      , neighbor: [35, 3, 0, 32]
      , column: 2
      , dozen: 3
      , high: 1
      , odd: 0
    },
    {
        number: 27
      , color: 1
      , section: 3
      , neighbor: [34, 6, 27, 13]
      , column: 3
      , dozen: 3
      , high: 1
      , odd: 1
    },
    {
        number: 28
      , color: 2
      , section: 1
      , neighbor: [29, 7, 12, 35]
      , column: 1
      , dozen: 3
      , high: 1
      , odd: 0
    },
    {
        number: 29
      , color: 2
      , section: 1
      , neighbor: [22, 18, 7, 28]
      , column: 2
      , dozen: 3
      , high: 1
      , odd: 1
    },
    {
        number: 30
      , color: 1
      , section: 3
      , neighbor: [36, 11, 8, 23]
      , column: 3
      , dozen: 3
      , high: 1
      , odd: 0
    },
    {
        number: 31
      , color: 2
      , section: 2
      , neighbor: [20, 14, 9, 22]
      , column: 1
      , dozen: 3
      , high: 1
      , odd: 1
    },
    {
        number: 32
      , color: 1
      , section: 1
      , neighbor: [26, 0, 15, 19]
      , column: 2
      , dozen: 3
      , high: 1
      , odd: 0
    },
    {
        number: 33
      , color: 2
      , section: 3
      , neighbor: [24, 16, 1, 20]
      , column: 3
      , dozen: 3
      , high: 1
      , odd: 1
    },
    {
        number: 34
      , color: 1
      , section: 2
      , neighbor: [25, 17, 6, 27]
      , column: 1
      , dozen: 3
      , high: 1
      , odd: 0
    },
    {
        number: 35
      , color: 2
      , section: 1
      , neighbor: [28, 12, 3, 26]
      , column: 2
      , dozen: 3
      , high: 1
      , odd: 1
    },
    {
        number: 36
      , color: 1
      , section: 3
      , neighbor: [27, 13, 11, 30]
      , column: 3
      , dozen: 3
      , high: 1
      , odd: 0
    },
    {
        number: 0
      , color: 0
      , section: 1
      , neighbor: [3, 26, 32, 15]
      , column: 0
      , dozen: 0
      , high: 0
      , odd: 0
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  setSugestion = () => {
    this.bestNumbers = {
      color: -1,
      section: -1,
      odd: -1,
      high: -1,
    }
    this.sequenceNumbers.map(content => {
      if(content.title ==  'Cor') {
        content.options.map(option => {
          if(option.bigger) {
            if(option.name == 'Vermelho') {
              this.bestNumbers.color = 1;
            }
            else if(option.name == 'Preto') {
              this.bestNumbers.color = 2;
            }
            else if(option.name == 'Zero') {
              this.bestNumbers.color = 0;
            }
          }
        })
      }
      if(content.title ==  'Alto/Baixo') {
        content.options.map(option => {
          if(option.bigger) this.bestNumbers.high = option.name == 'Alto' ? 1 : 0;
        })
      }
      if(content.title ==  'Impar/Par') {
        content.options.map(option => {
          if(option.bigger) this.bestNumbers.odd = option.name == 'Impar' ? 1 : 0;
        })
      }
      if(content.title ==  'Duzias') {
        let n: Array<number> = []
        content.options.map(option => {
          if(option.bigger) {
            if(option.name == '1º Duzia') {
              n.push(1)
            }
            if(option.name == '2º Duzia') {
              n.push(2)
            }
            if(option.name == '3º Duzia') {
              n.push(3)
            }
          }
        })
        this.bestNumbers.dozen = n;
      }
      if(content.title ==  'Colunas') {
        let n: Array<number> = []
        content.options.map(option => {
          if(option.bigger) {
            if(option.name == '1º Coluna') {
              n.push(1);
            }
            if(option.name == '2º Coluna') {
              n.push(2);
            }
            if(option.name == '3º Coluna') {
              n.push(3);
            }
          }
        })
        this.bestNumbers.column = n;
      }
      if(content.title ==  'Seção') {
        content.options.map(option => {
          if(option.bigger) {
            if(option.name == 'Voisins') {
              this.bestNumbers.section = 1;
            }
            if(option.name == 'Orphelins') {
              this.bestNumbers.section = 2;
            }
            if(option.name == 'Tiers') {
              this.bestNumbers.section = 3;
            }
          }
        })
      }
    });
    this.sequencePull = [];
    let num = this.numbers;

    num = this.bestNumbers.color   != -1 ? num.filter(n => {return n.color   == this.bestNumbers.color  }) : num;
    num = this.bestNumbers.high    != -1 ? num.filter(n => {return n.high    == this.bestNumbers.high   }) : num;
    num = this.bestNumbers.odd     != -1 ? num.filter(n => {return n.odd     == this.bestNumbers.odd    }) : num;
    num = this.bestNumbers.section != -1 ? num.filter(n => {return n.section == this.bestNumbers.section}) : num;
    num = this.bestNumbers.column?.length ? num.filter(n => {return this.bestNumbers.column?.includes(n.column) }) : num;
    num = this.bestNumbers.dozen?.length  ? num.filter(n => {return this.bestNumbers.dozen ?.includes(n.dozen)  }) : num;

    this.sequencePull = num;
  }

}
