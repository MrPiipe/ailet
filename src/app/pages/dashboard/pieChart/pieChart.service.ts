import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig: BaThemeConfigProvider) {
  }

  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      /*{
        color: pieColor,
        description: 'New Visits',
        stats: '57,820',
        icon: 'person',
      },*/ {
        color: pieColor,
        description: 'Estimated Savings',
        stats: '$ 89,745 Pesos',
        icon: 'money',
      }, /*{
        color: pieColor,
        description: 'Active Users',
        stats: '178,391',
        icon: 'face',
      },*/ {
        color: pieColor,
        description: 'Consumption',
        stats: '32,592 Watts',
        icon: 'refresh',
      }
    ];
  }
}
