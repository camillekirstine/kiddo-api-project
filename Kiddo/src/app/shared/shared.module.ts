import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { FooterTabComponent } from '../components/footer-tab/footer-tab.component';
import { CardComponent } from '../components/card/card.component';
import { ClickOutSideDirective } from '../click-out-side.directive';
import { ButtonComponent } from '../components/button/button.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ActivityFilterComponent } from '../components/activity-filter/activity-filter.component';
import { FormsModule } from '@angular/forms';
import { GenericModalComponent } from '../components/generic-modal/generic-modal.component';
import { ActivitySortComponent } from '../components/activity-sort/activity-sort.component';
import { SuccesModalComponent } from '../components/succes-modal/succes-modal.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { LocalnavComponent } from '../components/localnav/localnav.component';

@NgModule({
  declarations: [
    FooterTabComponent,
    SearchBarComponent,
    CardComponent,
    ButtonComponent,
    ClickOutSideDirective,
    ActivityFilterComponent,
    GenericModalComponent,
    ActivitySortComponent,
    SuccesModalComponent,
    NavbarComponent,
    LocalnavComponent
  ],
  imports: [CommonModule, IonicModule, RouterModule, FormsModule],
  exports: [
    FooterTabComponent,
    SearchBarComponent,
    CardComponent,
    ButtonComponent,
    ClickOutSideDirective,
    ActivityFilterComponent,
    GenericModalComponent,
    ActivitySortComponent,
    SuccesModalComponent,
    NavbarComponent,
    LocalnavComponent
  ],
})
export class SharedModule {}
