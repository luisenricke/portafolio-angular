import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { HomeRoutingModule } from './';
import {
  AboutMeComponent,
  GetInTouchComponent,
  IntroductionComponent,
  WorkExperienceComponent,
} from './components';
import { HomeComponent } from './pages';

@NgModule({
  declarations: [
    HomeComponent,

    AboutMeComponent,
    GetInTouchComponent,
    IntroductionComponent,
    WorkExperienceComponent,
  ],
  imports: [NgOptimizedImage, CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
