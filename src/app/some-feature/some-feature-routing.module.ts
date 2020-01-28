import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCoolFeatureComponent } from './my-cool-feature/my-cool-feature.component';
import { AuthGuard } from '../auth/auth.guard';
import { AuthGuardService } from '../auth/auth-guard.service';

const routes: Routes = [
  {
    path: 'some-feature',
    component: MyCoolFeatureComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SomeFeatureRoutingModule { }
