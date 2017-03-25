import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { TreeModule } from 'ng2-tree';

//import { routing }       from './ailet.routing';
import { Ailet } from './ailet.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule//,
    //routing
  ],
  declarations: [
    Ailet
  ]
})
export class AiletModule { }
