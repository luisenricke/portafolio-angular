import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [IntroductionComponent, HomeComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
