import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing } from './statistics.routing';
import { Statistics } from './statistics.component';
import { ChartistJs } from './components/chartistJs/chartistJs.component';
import { ChartistJsService } from './components/chartistJs/chartistJs.service';
import { BasicTables } from './components/basic-tables/basicTables.component';
import { BasicTablesService } from './components/basic-tables/basicTables.service';
import { ResponsiveTable } from './components/basic-tables/components/responsiveTable';
import { StripedTable } from './components/basic-tables/components/stripedTable';
import { BorderedTable } from './components/basic-tables/components/borderedTable';
import { HoverTable } from './components/basic-tables/components/hoverTable';
import { CondensedTable } from './components/basic-tables/components/condensedTable';
import { ContextualTable } from './components/basic-tables/components/contextualTable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Statistics,
    ChartistJs,
    BasicTables,
    HoverTable,
    BorderedTable,
    CondensedTable,
    StripedTable,
    ContextualTable,
    ResponsiveTable,
  ],
  providers: [
    ChartistJsService,
    BasicTablesService
  ]
})
export class StatisticsModule { }
