import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentDashboardRoutingModule } from './agent-dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { AuthGuardService } from '../auth/auth-guard.service';

@NgModule({
  declarations: [DashboardHomeComponent],
  imports: [
    CommonModule,
    AgentDashboardRoutingModule
  ]
})
export class AgentDashboardModule { }
