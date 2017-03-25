import { Routes, RouterModule }  from '@angular/router';

import { Statistics } from './statistics.component';
import { ChartistJs } from './components/chartistJs/chartistJs.component';
import { BasicTables } from './components/basic-tables/basicTables.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Statistics,
    children: [
      { path: 'chartist-js', component: ChartistJs },
      { path: 'numbers', component: BasicTables }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
