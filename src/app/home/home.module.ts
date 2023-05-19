import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [IntroductionComponent, HomeComponent, AboutMeComponent],
  imports: [NgOptimizedImage, CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
