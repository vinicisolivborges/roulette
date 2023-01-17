import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-analyzes',
  templateUrl: './analyzes.component.html',
  styleUrls: ['./analyzes.component.scss']
})
export class AnalyzesComponent implements OnInit {
  @Input() sequenceNumbers: Array<any> = [];

  @Output() analyzes_emit = new EventEmitter<any>;

  public analyzes: Array<any> = [];

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
    ]
  }


}
