import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_auth/index';
import { StatisticsComponent } from './statistics/index';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'dashboard', component: DashboardComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
