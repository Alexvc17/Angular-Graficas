import { Component, ViewChild } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { ChartEvent } from 'chart.js/dist/core/core.plugins';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',

})
export class DonaComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined; // ViewChild para acceder al gráfico

  // Doughnut
  public doughnutChartLabels: string[] = [
    'Tamales',
    'Tortilla',
    'Chorizo',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100] },
      { data: [50, 150, 120] },
      { data: [250, 130, 70] },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);

  }

  public numerosRandom():void{

  // Generar nuevos valores para cada conjunto de datos
  const randoms = [
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100)
  ];


  // Actualizar los datos de cada conjunto
  this.doughnutChartData.datasets.forEach((dataset: any) => {
    dataset.data = [...randoms];
  });


         if (this.chart) {
      this.chart.update(); // Método update para refrescar el gráfico
    }

  }
}
