import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss']
})
export class InitialPageComponent implements OnInit {

  @ViewChild('analyzes') public analyzes: any;
  @ViewChild('analyzes_number') public analyzes_number: any;
  @ViewChild('analyzes_neighbor') public analyzes_neighbor: any;
  @ViewChild('sugestion') public sugestion: any;

  public sequenceNumbers: Array<any> = [];
  public analyzesNumber: Array<any> = [];
  public analyzesNeighbor: Array<any> = [];
  public sugestions: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

  getNumber = async (number: Object) => {
    this.sequenceNumbers.unshift(number);
    this.analyzes.analyzing_numbers();
    this.analyzes_number.analyzes_numbers();
    this.analyzes_neighbor.analyzes_neighbors();
    this.getAnalyzes()
    await setTimeout(() => { this.sugestion.setSugestion(); }, 200);
    
  }

  getAnalyzesNumbers = (data: Array<any>) => this.analyzesNumber = data;
  getAnalyzesNeighbor = (data: Array<any>) => this.analyzesNeighbor = data;

  getAnalyzes = () => {
    const total = this.analyzesNumber[0].options[0].amount + this.analyzesNeighbor[0].options[0].amount //VERMELHO
                + this.analyzesNumber[0].options[1].amount + this.analyzesNeighbor[0].options[1].amount //PRETO
                + this.analyzesNumber[0].options[2].amount + this.analyzesNeighbor[0].options[2].amount; //ZERO

    const vermelho = this.analyzesNumber[0].options[0].amount + this.analyzesNeighbor[0].options[0].amount; //VERMELHO
    const preto    = this.analyzesNumber[0].options[1].amount + this.analyzesNeighbor[0].options[1].amount; //PRETO
    const zero     = this.analyzesNumber[0].options[2].amount + this.analyzesNeighbor[0].options[2].amount; //ZERO

    const alto     = this.analyzesNumber[1].options[0].amount + this.analyzesNeighbor[1].options[0].amount; //ALTO
    const baixo    = this.analyzesNumber[1].options[1].amount + this.analyzesNeighbor[1].options[1].amount; //BAIXO

    const par      = this.analyzesNumber[2].options[0].amount + this.analyzesNeighbor[2].options[0].amount; //PAR
    const impar    = this.analyzesNumber[2].options[1].amount + this.analyzesNeighbor[2].options[1].amount; //IMPAR

    const d1       = this.analyzesNumber[3].options[0].amount + this.analyzesNeighbor[3].options[0].amount; //DUZIA 1
    const d2       = this.analyzesNumber[3].options[1].amount + this.analyzesNeighbor[3].options[1].amount; //DUZIA 2
    const d3       = this.analyzesNumber[3].options[2].amount + this.analyzesNeighbor[3].options[2].amount; //DUZIA 3

    const c1       = this.analyzesNumber[4].options[0].amount + this.analyzesNeighbor[4].options[0].amount; //COLUNA 1
    const c2       = this.analyzesNumber[4].options[1].amount + this.analyzesNeighbor[4].options[1].amount; //COLUNA 2
    const c3       = this.analyzesNumber[4].options[2].amount + this.analyzesNeighbor[4].options[2].amount; //COLUNA 3

    const voi      = this.analyzesNumber[5].options[0].amount + this.analyzesNeighbor[5].options[0].amount; //VOISINS
    const orp      = this.analyzesNumber[5].options[1].amount + this.analyzesNeighbor[5].options[1].amount; //ORPHELINS
    const tie      = this.analyzesNumber[5].options[2].amount + this.analyzesNeighbor[5].options[2].amount; //TIERS

    this.sugestions = [
      {
        title: 'Cor',
        options: [
          {
            name: 'Vermelho',
            amount: vermelho,
            porcent: total > 1 ? (vermelho*100/total).toFixed(2) : 0,
            bigger: vermelho > preto && vermelho > zero ? true : false
          },
          {
            name: 'Preto',
            amount: preto,
            porcent: total > 1 ? (preto*100/total).toFixed(2) : 0,
            bigger: preto > vermelho && preto > zero ? true : false
          },
          {
            name: 'Zero',
            amount: zero,
            porcent: total > 1 ? (zero*100/total).toFixed(2) : 0,
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
            porcent: total > 1 ? (alto*100/total).toFixed(2) : 0,
            bigger: alto > baixo ? true : false
          },
          {
            name: 'Baixo',
            amount: baixo,
            porcent: total > 1 ? (baixo*100/total).toFixed(2) : 0,
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
            porcent: total > 1 ? (par*100/total).toFixed(2) : 0,
            bigger: par > impar ? true : false
          },
          {
            name: 'Impar',
            amount: impar,
            porcent: total > 1 ? (impar*100/total).toFixed(2) : 0,
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
            porcent: total > 1 ? (d1*100/total).toFixed(2) : 0,
            bigger: d1 > d2 && d1 > d3 ? true : ((d1 <= d2 && d1 > d3) || (d1 <= d3 && d1 > d2)) ? true : false
          },
          {
            name: '2º Duzia',
            amount: d2,
            porcent: total > 1 ? (d2*100/total).toFixed(2) : 0, 
            bigger: d2 > d1 && d2 > d3 ? true : ((d2 <= d1 && d2 > d3) || (d2 <= d3 && d2 > d1)) ? true : false
          },
          {
            name: '3º Duzia',
            amount: d3,
            porcent: total > 1 ? (d3*100/total).toFixed(2) : 0,
            bigger: d3 > d1 && d3 > d2 ? true : ((d3 <= d1 && d3 > d2) || (d3 <= d2 && d3 > d1)) ? true : false
          },
        ]
      },
      {
        title: 'Colunas',
        options: [
          {
            name: '1º Coluna',
            amount: c1,
            porcent: total > 1 ? (c1*100/total).toFixed(2) : 0,
            bigger: c1 >= c2 && c1 > c3 ? true : ((c1 <= c2 && c1 > c3) || (c1 <= c3 && c1 > c2))  ? true : false
          },
          {
            name: '2º Coluna',
            amount: c2,
            porcent: total > 1 ? (c2*100/total).toFixed(2) : 0, 
            bigger: c2 >= c1 && c2 > c3 ? true : ((c2 <= c1 && c2 > c3) || (c2 <= c3 && c2 > c1)) ? true : false
          },
          {
            name: '3º Coluna',
            amount: c3,
            porcent: total > 1 ? (c3*100/total).toFixed(2) : 0,
            bigger: c3 >= c1 && c3 > c2 ? true : ((c3 <= c1 && c3 > c2) || (c3 <= c2 && c3 > c1))? true : false
          }
        ]
      },
      {
        title: 'Seção',
        options: [
          {
            name: 'Voisins',
            amount: voi,
            porcent: total > 1 ? (voi*100/total).toFixed(2) : 0,
            bigger: voi > orp && voi > tie ? true : false
          },
          {
            name: 'Orphelins',
            amount: orp,
            porcent: total > 1 ? (orp*100/total).toFixed(2) : 0,
            bigger: orp > voi && orp > tie ? true : false
          },
          {
            name: 'Tiers',
            amount: tie,
            porcent: total > 1 ? (tie*100/total).toFixed(2) : 0,
            bigger: tie > orp && tie > voi ? true : false
          }
        ]
      }
    ];
  }

  removeNumber = () => this.sequenceNumbers.shift();
}
