import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DummypagePage } from './dummypage.page';

const routes: Routes = [
  {
    path: '',
    component: DummypagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DummypagePageRoutingModule {}
