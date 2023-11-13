import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendPageRoutingModule } from './attend-routing.module';

import { AttendPage } from './attend.page';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
    declarations: [AttendPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AttendPageRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class AttendPageModule {}
