import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalenderPageRoutingModule } from './calender-routing.module';

import { CalenderPage } from './calender.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalenderPageRoutingModule,
    SharedModule
  ],
  declarations: [CalenderPage]
})
export class CalenderPageModule {}
