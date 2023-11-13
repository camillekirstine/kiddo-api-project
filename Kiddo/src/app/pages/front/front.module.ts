import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrontPageRoutingModule } from './front-routing.module';

import { FrontPage } from './front.page';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
    declarations: [FrontPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FrontPageRoutingModule,
        SharedModule
    ]
})
export class FrontPageModule {}
