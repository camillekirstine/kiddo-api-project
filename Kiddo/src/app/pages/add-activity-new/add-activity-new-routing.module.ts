import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddActivityNewPage } from './add-activity-new.page';

const routes: Routes = [
  {
    path: '',
    component: AddActivityNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddActivityNewPageRoutingModule {}
