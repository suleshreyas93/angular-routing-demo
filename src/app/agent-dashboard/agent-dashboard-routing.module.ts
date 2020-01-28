import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { AuthGuard } from '../auth/auth.guard';
import { AuthGuardService } from '../auth/auth-guard.service';
const routes: Routes = [
  {
    path: '',
    component: DashboardHomeComponent,
    // canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentDashboardRoutingModule { }
