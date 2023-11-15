import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DummypagePageRoutingModule } from './dummypage-routing.module';

import { DummypagePage } from './dummypage.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DummypagePageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [DummypagePage]
})
export class DummypagePageModule {}
export { DummypagePageRoutingModule };

