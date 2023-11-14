import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddActivityNewPageRoutingModule } from './add-activity-new-routing.module';

import { AddActivityNewPage } from './add-activity-new.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddActivityNewPageRoutingModule,
    SharedModule
  ],
  declarations: [AddActivityNewPage]
})
export class AddActivityNewPageModule {}
