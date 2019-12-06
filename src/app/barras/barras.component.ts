import { Component } from '@angular/core';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})
export class BarrasComponent {

  conteoTotal = 0;

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2019'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [0], label: 'Melgarejo'},
    {data: [0], label: 'Ballivian'},
    {data: [0], label: 'Linares'}
  ];

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  votar(id: number): void {
    let data = this.barChartData[id].data;
    console.log(data);
    console.log(this.barChartData[id].data);
    console.log(this.conteoTotal);
    if (this.conteoTotal < 50) {
      switch (id) {
        case 0:
          data[0] = data[0] + 1;
          break;
        case 1:
          data[0]++;
          break;
        case 2:
          data[0]++;
          break;
      }
      this.conteoTotal++;
    }
    let clone = this.barChartData;
    clone[id].data = data;
    this.barChartData = clone;
  }
}
