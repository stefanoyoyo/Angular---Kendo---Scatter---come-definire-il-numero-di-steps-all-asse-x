import { Component } from '@angular/core';
import { mockData, WeatherData } from './weather-data';

@Component({
    selector: 'my-app',
    template: `
      <kendo-chart>
        <kendo-chart-series>
          <kendo-chart-title text="Daily Max (&deg;C)"></kendo-chart-title>
          <kendo-chart-series-item type="column" [data]="data"
                                   field="TMax" categoryField="Date">
          </kendo-chart-series-item>
        </kendo-chart-series>

        <kendo-chart-category-axis>
            <kendo-chart-category-axis-item [maxDivisions]="15">
            </kendo-chart-category-axis-item>
        </kendo-chart-category-axis>

        <kendo-chart-tooltip>
          <ng-template kendoChartSeriesTooltipTemplate let-category="category" let-value="value">
            {{ category | date }}: {{ value }}
          </ng-template>
        </kendo-chart-tooltip>
      </kendo-chart>
    `
})
export class AppComponent {
    public data: WeatherData[] = mockData();
}
