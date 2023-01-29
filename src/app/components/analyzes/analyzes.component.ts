import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-analyzes',
  templateUrl: './analyzes.component.html',
  styleUrls: ['./analyzes.component.scss']
})
export class AnalyzesComponent implements OnInit {
  @Input() sequenceNumbers: Array<any> = [];
  @Input() analyzes_number: Boolean = false;
  @Input() analyzes_neighbor: Boolean = false;

  @Output() analyzes_emit = new EventEmitter<any>;

  public numero: number = 0;
  public analyzes: Array<any> = [];
  public sequencePull: Array<any> = [];
  public sequencePullNeighbor: Array<any> = [];

  public analyzesNumber: Array<any> = [];
  public analyzesNeighbor: Array<any> = [];

  public n = [
    [26, 32], 
    [20, 33],
    [21, 25],
    [26, 35],
    [19, 21],
    [24, 10],
    [27, 34], 
    [29, 28],
    [23, 30],
    [22, 31],
    [23, 5],
    [30, 36],
    [28, 35],
    [36, 27],
    [20, 31],
    [32, 19],
    [24, 33],
    [34, 25],
    [22, 29],
    [4, 15],
    [1, 14],
    [4, 2],
    [9, 18],
    [10, 8],
    [5, 16],
    [2, 17],
    [0, 3],
    [6, 13], 
    [7, 12],
    [7, 18],
    [11, 8],
    [9, 14],
    [0, 15],
    [1, 16],
    [17, 6],
    [3, 12],
    [13, 11]
  ];

  constructor() { }

  ngOnInit(): void {
  }

  analyzing_numbers = () => {
    let vermelho = 0, preto = 0, zero = 0, alto = 0, baixo = 0, par = 0, impar = 0, d1 = 0, d2 = 0, d3 = 0, c1 = 0, c2 = 0, c3 = 0, orp = 0, voi = 0, tie = 0
    this.sequenceNumbers.map(content => {
      content.color === 1 ? vermelho++ : 0;
      content.color === 2 ? preto++ : 0;
      content.color === 0 ? zero++ : 0;
      content.high ? alto++ : baixo++;
      content.number%2 === 0 && content.number != 0 ? par++ : impar++;
      content.dozen === 1 ? d1++ : 0;
      content.dozen === 2 ? d2++ : 0;
      content.dozen === 3 ? d3++ : 0;
      content.column === 1 ? c1++ : 0;
      content.column === 2 ? c2++ : 0;
      content.column === 3 ? c3++ : 0;
      content.section === 1 ? voi++ : 0;
      content.section === 2 ? orp++ : 0;
      content.section === 3 ? tie++ : 0;
    });

    this.analyzes = [
      {
        title: 'Cor',
        options: [
          {
            name: 'Vermelho',
            amount: vermelho,
            porcent: (vermelho*100/this.sequenceNumbers.length).toFixed(2) + '%'
          },
          {
            name: 'Preto',
            amount: preto,
            porcent: (preto*100/this.sequenceNumbers.length).toFixed(2) + '%'
          },
          {
            name: 'Zero',
            amount: zero,
            porcent: (zero*100/this.sequenceNumbers.length).toFixed(2) + '%'
          }
        ]
      },
      {
        title: 'Alto/Baixo',
        options: [
          {
            name: 'Alto',
            amount: alto,
            porcent: (alto*100/this.sequenceNumbers.length).toFixed(2) + '%'
          },
          {
            name: 'Baixo',
            amount: baixo,
            porcent: (baixo*100/this.sequenceNumbers.length).toFixed(2) + '%'
          }
        ]
      },
      {
        title: 'Duzias',
        options: [
          {
            name: '1º Duzia',
            amount: d1,
            porcent: (d1*100/this.sequenceNumbers.length).toFixed(2) + '%'
          },
          {
            name: '2º Duzia',
            amount: d2,
            porcent: (d2*100/this.sequenceNumbers.length).toFixed(2) + '%'
          },
          {
            name: '3º Duzia',
            amount: d3,
            porcent: (d3*100/this.sequenceNumbers.length).toFixed(2) + '%'
          },
        ]
      },
      {
        title: 'Colunas',
        options: [
          {
            name: '1º Coluna',
            amount: c1,
            porcent: (c1*100/this.sequenceNumbers.length).toFixed(2) + '%'
          },
          {
            name: '2º Coluna',
            amount: c2,
            porcent: (c2*100/this.sequenceNumbers.length).toFixed(2) + '%'
          },
          {
            name: '3º Coluna',
            amount: c3,
            porcent: (c3*100/this.sequenceNumbers.length).toFixed(2) + '%'
          },
        ]
      },
      {
        title: 'Seção',
        options: [
          {
            name: 'Voisins',
            amount: voi,
            porcent: (voi*100/this.sequenceNumbers.length).toFixed(2) + '%'
          },
          {
            name: 'Orphelins',
            amount: orp,
            porcent: (orp*100/this.sequenceNumbers.length).toFixed(2) + '%'
          },
          {
            name: 'Tiers',
            amount: tie,
            porcent: (tie*100/this.sequenceNumbers.length).toFixed(2) + '%'
          },
        ]
      }
    ];
  }

  analyzes_numbers = () => {
    let vermelho = 0, preto = 0, zero = 0, alto = 0, baixo = 0, par = 0, impar = 0, d1 = 0, d2 = 0, d3 = 0, c1 = 0, c2 = 0, c3 = 0, total = 0, orp = 0, voi = 0, tie = 0;
    this.sequencePull = [];
    this.numero = this.sequenceNumbers[0].number;
    this.sequenceNumbers.map((content, index) => {
      if(index != 0) {
        if(content.number == this.numero){
          this.sequencePull.push(this.sequenceNumbers[index-1]);
          total++;
          this.sequenceNumbers[index-1].color === 1 ? vermelho++ : 0;
          this.sequenceNumbers[index-1].color === 2 ? preto++ : 0;
          this.sequenceNumbers[index-1].color === 0 ? zero++ : 0;
          this.sequenceNumbers[index-1].high ? alto++ : baixo++;
          this.sequenceNumbers[index-1].number%2 === 0 && this.sequenceNumbers[index-1].number != 0 ? par++ : impar++;
          this.sequenceNumbers[index-1].dozen === 1 ? d1++ : 0;
          this.sequenceNumbers[index-1].dozen === 2 ? d2++ : 0;
          this.sequenceNumbers[index-1].dozen === 3 ? d3++ : 0;
          this.sequenceNumbers[index-1].column === 1 ? c1++ : 0;
          this.sequenceNumbers[index-1].column === 2 ? c2++ : 0;
          this.sequenceNumbers[index-1].column === 3 ? c3++ : 0;
          this.sequenceNumbers[index-1].section === 1 ? voi++ : 0;
          this.sequenceNumbers[index-1].section === 2 ? orp++ : 0;
          this.sequenceNumbers[index-1].section === 3 ? tie++ : 0;
        }
      }
    });

    this.analyzes = [
      {
        title: 'Cor',
        options: [
          {
            name: 'Vermelho',
            amount: vermelho,
            porcent: total > 1 ? (vermelho*100/total).toFixed(2) + '%' : '0%',
            bigger: vermelho > preto && vermelho > zero ? true : false
          },
          {
            name: 'Preto',
            amount: preto,
            porcent: total > 1 ? (preto*100/total).toFixed(2) + '%' : '0%',
            bigger: preto > vermelho && preto > zero ? true : false
          },
          {
            name: 'Zero',
            amount: zero,
            porcent: total > 1 ? (zero*100/total).toFixed(2) + '%' : '0%',
            bigger: zero > vermelho && zero > preto ? true : false
          }
        ]
      },
      {
        title: 'Alto/Baixo',
        options: [
          {
            name: 'Alto',
            amount: alto,
            porcent: total > 1 ? (alto*100/total).toFixed(2) + '%' : '0%',
            bigger: alto > baixo ? true : false
          },
          {
            name: 'Baixo',
            amount: baixo,
            porcent: total > 1 ? (baixo*100/total).toFixed(2) + '%' : '0%',
            bigger: baixo > alto ? true : false
          }
        ]
      },
      {
        title: 'Impar/Par',
        options: [
          {
            name: 'Par',
            amount: par,
            porcent: total > 1 ? (par*100/total).toFixed(2) + '%' : '0%',
            bigger: par > impar ? true : false
          },
          {
            name: 'Impar',
            amount: impar,
            porcent: total > 1 ? (impar*100/total).toFixed(2) + '%' : '0%',
            bigger: impar > par ? true : false
          }
        ]
      },
      {
        title: 'Duzias',
        options: [
          {
            name: '1º Duzia',
            amount: d1,
            porcent: total > 1 ? (d1*100/total).toFixed(2) + '%' : '0%',
            bigger: d1 > d2 && d1 > d3 ? true : false
          },
          {
            name: '2º Duzia',
            amount: d2,
            porcent: total > 1 ? (d2*100/total).toFixed(2) + '%' : '0%', 
            bigger: d2 > d1 && d2 > d3 ? true : false
          },
          {
            name: '3º Duzia',
            amount: d3,
            porcent: total > 1 ? (d3*100/total).toFixed(2) + '%' : '0%',
            bigger: d3 > d1 && d3 > d2 ? true : false
          },
        ]
      },
      {
        title: 'Colunas',
        options: [
          {
            name: '1º Coluna',
            amount: c1,
            porcent: total > 1 ? (c1*100/total).toFixed(2) + '%' : '0%',
            bigger: c1 > c2 && c1 > c3 ? true : false
          },
          {
            name: '2º Coluna',
            amount: c2,
            porcent: total > 1 ? (c2*100/total).toFixed(2) + '%' : '0%', 
            bigger: c2 > c1 && c2 > c3 ? true : false
          },
          {
            name: '3º Coluna',
            amount: c3,
            porcent: total > 1 ? (c3*100/total).toFixed(2) + '%' : '0%',
            bigger: c3 > c1 && c3 > c2 ? true : false
          }
        ]
      },
      {
        title: 'Seção',
        options: [
          {
            name: 'Voisins',
            amount: voi,
            porcent: total > 1 ? (voi*100/total).toFixed(2) + '%' : '0%',
            bigger: voi > orp && voi > tie ? true : false
          },
          {
            name: 'Orphelins',
            amount: orp,
            porcent: total > 1 ? (orp*100/total).toFixed(2) + '%' : '0%',
            bigger: orp > voi && orp > tie ? true : false
          },
          {
            name: 'Tiers',
            amount: tie,
            porcent: total > 1 ? (tie*100/total).toFixed(2) + '%' : '0%',
            bigger: tie > orp && tie > voi ? true : false
          }
        ]
      }
    ];

    this.analyzes_emit.emit(this.analyzes);
  }

  analyzes_neighbors = () => {

    let vermelho = 0, preto = 0, zero = 0, alto = 0, baixo = 0, par = 0, impar = 0, d1 = 0, d2 = 0, d3 = 0, c1 = 0, c2 = 0, c3 = 0, total = 0, orp = 0, voi = 0, tie = 0;
    this.numero = this.sequenceNumbers[0].number;
    this.sequencePullNeighbor = [
      {
          number: this.n[this.numero][0]
        , sequenceNumbers: []
      },
      {
          number: this.n[this.numero][1]
        , sequenceNumbers: []
      }
    ]
    this.sequenceNumbers.map((content, index) => {
      if(index != 0) {
        if(this.n[this.numero].includes(content.number)){
          total++;
          this.sequenceNumbers[index-1].color === 1 ? vermelho++ : 0;
          this.sequenceNumbers[index-1].color === 2 ? preto++ : 0;
          this.sequenceNumbers[index-1].color === 0 ? zero++ : 0;
          this.sequenceNumbers[index-1].high ? alto++ : baixo++;
          this.sequenceNumbers[index-1].number%2 === 0 && this.sequenceNumbers[index-1].number != 0 ? par++ : impar++;
          this.sequenceNumbers[index-1].dozen === 1 ? d1++ : 0;
          this.sequenceNumbers[index-1].dozen === 2 ? d2++ : 0;
          this.sequenceNumbers[index-1].dozen === 3 ? d3++ : 0;
          this.sequenceNumbers[index-1].column === 1 ? c1++ : 0;
          this.sequenceNumbers[index-1].column === 2 ? c2++ : 0;
          this.sequenceNumbers[index-1].column === 3 ? c3++ : 0;
          this.sequenceNumbers[index-1].section === 1 ? voi++ : 0;
          this.sequenceNumbers[index-1].section === 2 ? orp++ : 0;
          this.sequenceNumbers[index-1].section === 3 ? tie++ : 0;

          if(this.sequencePullNeighbor[0].number == content.number) {
            this.sequencePullNeighbor[0].sequenceNumbers.push(this.sequenceNumbers[index-1]);
          } else {
            this.sequencePullNeighbor[1].sequenceNumbers.push(this.sequenceNumbers[index-1]);
          }
        }
      }
    });

    this.analyzes = [
      {
        title: 'Cor',
        options: [
          {
            name: 'Vermelho',
            amount: vermelho,
            porcent: total > 1 ? (vermelho*100/total).toFixed(2) + '%' : '0%',
            bigger: vermelho > preto && vermelho > zero ? true : false
          },
          {
            name: 'Preto',
            amount: preto,
            porcent: total > 1 ? (preto*100/total).toFixed(2) + '%' : '0%',
            bigger: preto > vermelho && preto > zero ? true : false
          },
          {
            name: 'Zero',
            amount: zero,
            porcent: total > 1 ? (zero*100/total).toFixed(2) + '%' : '0%',
            bigger: zero > vermelho && zero > preto ? true : false
          }
        ]
      },
      {
        title: 'Alto/Baixo',
        options: [
          {
            name: 'Alto',
            amount: alto,
            porcent: total > 1 ? (alto*100/total).toFixed(2) + '%' : '0%',
            bigger: alto > baixo ? true : false
          },
          {
            name: 'Baixo',
            amount: baixo,
            porcent: total > 1 ? (baixo*100/total).toFixed(2) + '%' : '0%',
            bigger: baixo > alto ? true : false
          }
        ]
      },
      {
        title: 'Impar/Par',
        options: [
          {
            name: 'Par',
            amount: par,
            porcent: total > 1 ? (par*100/total).toFixed(2) + '%' : '0%',
            bigger: par > impar ? true : false
          },
          {
            name: 'Impar',
            amount: impar,
            porcent: total > 1 ? (impar*100/total).toFixed(2) + '%' : '0%',
            bigger: impar > par ? true : false
          }
        ]
      },
      {
        title: 'Duzias',
        options: [
          {
            name: '1º Duzia',
            amount: d1,
            porcent: total > 1 ? (d1*100/total).toFixed(2) + '%' : '0%',
            bigger: d1 > d2 && d1 > d3 ? true : false
          },
          {
            name: '2º Duzia',
            amount: d2,
            porcent: total > 1 ? (d2*100/total).toFixed(2) + '%' : '0%', 
            bigger: d2 > d1 && d2 > d3 ? true : false
          },
          {
            name: '3º Duzia',
            amount: d3,
            porcent: total > 1 ? (d3*100/total).toFixed(2) + '%' : '0%',
            bigger: d3 > d1 && d3 > d2 ? true : false
          },
        ]
      },
      {
        title: 'Colunas',
        options: [
          {
            name: '1º Coluna',
            amount: c1,
            porcent: total > 1 ? (c1*100/total).toFixed(2) + '%' : '0%',
            bigger: c1 > c2 && c1 > c3 ? true : false
          },
          {
            name: '2º Coluna',
            amount: c2,
            porcent: total > 1 ? (c2*100/total).toFixed(2) + '%' : '0%', 
            bigger: c2 > c1 && c2 > c3 ? true : false
          },
          {
            name: '3º Coluna',
            amount: c3,
            porcent: total > 1 ? (c3*100/total).toFixed(2) + '%' : '0%',
            bigger: c3 > c1 && c3 > c2 ? true : false
          }
        ]
      },
      {
        title: 'Seção',
        options: [
          {
            name: 'Voisins',
            amount: voi,
            porcent: total > 1 ? (voi*100/total).toFixed(2) + '%' : '0%',
            bigger: voi > orp && voi > tie ? true : false
          },
          {
            name: 'Orphelins',
            amount: orp,
            porcent: total > 1 ? (orp*100/total).toFixed(2) + '%' : '0%',
            bigger: orp > voi && orp > tie ? true : false
          },
          {
            name: 'Tiers',
            amount: tie,
            porcent: total > 1 ? (tie*100/total).toFixed(2) + '%' : '0%',
            bigger: tie > orp && tie > voi ? true : false
          }
        ]
      }
    ];
    
    this.analyzes_emit.emit(this.analyzes);
  }
}
