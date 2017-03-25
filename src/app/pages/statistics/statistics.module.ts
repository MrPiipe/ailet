import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './statistics.routing';
import { Statistics } from './statistics.component';
import { ChartistJs } from './components/chartistJs/chartistJs.component';
import { ChartistJsService } from './components/chartistJs/chartistJs.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Statistics,
    ChartistJs
  ],
  providers: [
    ChartistJsService
  ]
})
export class StatisticsModule { }
