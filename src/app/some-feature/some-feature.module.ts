import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SomeFeatureRoutingModule } from './some-feature-routing.module';
import { MyCoolFeatureComponent } from './my-cool-feature/my-cool-feature.component';

@NgModule({
  declarations: [MyCoolFeatureComponent],
  imports: [
    CommonModule,
    SomeFeatureRoutingModule
  ]
})
export class SomeFeatureModule { }
