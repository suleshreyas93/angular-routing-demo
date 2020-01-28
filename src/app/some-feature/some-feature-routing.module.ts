import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCoolFeatureComponent } from './my-cool-feature/my-cool-feature.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'some-feature',
    component: MyCoolFeatureComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SomeFeatureRoutingModule { }
