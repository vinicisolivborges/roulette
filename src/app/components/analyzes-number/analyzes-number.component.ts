import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-analyzes-number',
  templateUrl: './analyzes-number.component.html',
  styleUrls: ['./analyzes-number.component.scss']
})
export class AnalyzesNumberComponent implements OnInit {

  @Input() sequenceNumbers: Array<any> = [];
  @Output() analyzed = new EventEmitter<any>; 

  public numero: Number = 0;
  public analyzes: Array<any> = [];
  public sequencePull: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
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
            porcent: total > 1 ? (vermelho*100/total).toFixed(2) + '%' : '0%'
          },
          {
            name: 'Preto',
            amount: preto,
            porcent: total > 1 ? (preto*100/total).toFixed(2) + '%' : '0%'
          },
          {
            name: 'Zero',
            amount: zero,
            porcent: total > 1 ? (zero*100/total).toFixed(2) + '%' : '0%'
          }
        ]
      },
      {
        title: 'Alto/Baixo',
        options: [
          {
            name: 'Alto',
            amount: alto,
            porcent: total > 1 ? (alto*100/total).toFixed(2) + '%' : '0%'
          },
          {
            name: 'Baixo',
            amount: baixo,
            porcent: total > 1 ? (baixo*100/total).toFixed(2) + '%' : '0%'
          }
        ]
      },
      {
        title: 'Duzias',
        options: [
          {
            name: '1º Duzia',
            amount: d1,
            porcent: total > 1 ? (d1*100/total).toFixed(2) + '%' : '0%'
          },
          {
            name: '2º Duzia',
            amount: d2,
            porcent: total > 1 ? (d2*100/total).toFixed(2) + '%' : '0%'
          },
          {
            name: '3º Duzia',
            amount: d3,
            porcent: total > 1 ? (d3*100/total).toFixed(2) + '%' : '0%'
          },
        ]
      },
      {
        title: 'Colunas',
        options: [
          {
            name: '1º Coluna',
            amount: c1,
            porcent: total > 1 ? (c1*100/total).toFixed(2) + '%' : '0%'
          },
          {
            name: '2º Coluna',
            amount: c2,
            porcent: total > 1 ? (c2*100/total).toFixed(2) + '%' : '0%'
          },
          {
            name: '3º Coluna',
            amount: c3,
            porcent: total > 1 ? (c3*100/total).toFixed(2) + '%' : '0%'
          }
        ]
      },
      {
        title: 'Seção',
        options: [
          {
            name: 'Voisins',
            amount: voi,
            porcent: total > 1 ? (voi*100/total).toFixed(2) + '%' : '0%'
          },
          {
            name: 'Orphelins',
            amount: orp,
            porcent: total > 1 ? (orp*100/total).toFixed(2) + '%' : '0%'
          },
          {
            name: 'Tiers',
            amount: tie,
            porcent: total > 1 ? (tie*100/total).toFixed(2) + '%' : '0%'
          }
        ]
      }
    ]
    this.analyzed.emit(this.analyzes);
  }

}
