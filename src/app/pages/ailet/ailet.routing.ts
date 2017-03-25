import { Routes, RouterModule }  from '@angular/router';

import { Ailet } from './ailet.component';
import { TreeView } from './components/treeView/treeView.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ailet,
    children: [
      { path: 'treeview', component: TreeView }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
