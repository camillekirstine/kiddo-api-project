import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivityCard } from 'src/app/types/ActivityCard';

@Component({
  selector: 'app-activity-sort',
  templateUrl: './activity-sort.component.html',
  styleUrls: ['./activity-sort.component.scss'],
})
export class ActivitySortComponent  implements OnInit {

  @Input() activities: ActivityCard[] = [];
  @Output() onSortOptionSelected = new EventEmitter<string>();
  selectedSortOption: string = '';

  //Temporary variable to keep track of selected option, if user exits before applying sort.
  tempSelectedSortOption: string = '';
  showSort: boolean = false;

  SORT_OPTIONS = [
    { label: 'Dato', value: 'date' },
  ];
  constructor() { }

  ngOnInit() {}

  onModalSortOptionChange(event: CustomEvent){
    if(event.detail.value){
      this.tempSelectedSortOption = event.detail.value;
    } else {
      this.tempSelectedSortOption = '';
    }
  }

  openSort (event: Event) {
    event.stopPropagation();
    this.tempSelectedSortOption = this.selectedSortOption;
    this.showSort = true;
  }

  applySort() {
    this.selectedSortOption = this.tempSelectedSortOption;
    this.onSortOptionSelected.emit(this.selectedSortOption)
    this.closeSort();
  }
  
  closeSort() {
    this.showSort = false;
  }

}
