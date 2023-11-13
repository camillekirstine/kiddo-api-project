import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllActivitiesPageRoutingModule } from './all-activities-routing.module';

import { AllActivitiesPage } from './all-activities.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllActivitiesPageRoutingModule,
    SharedModule
  ],
  declarations: [AllActivitiesPage]
})
export class AllActivitiesPageModule {}
