import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AuthGuardService } from './auth/auth-guard.service';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./agent-dashboard/agent-dashboard.module').then(mod => mod.AgentDashboardModule),
    canLoad: [AuthGuardService]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
