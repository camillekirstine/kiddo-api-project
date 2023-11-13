import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterSortService } from 'src/app/services/filter-sort.service';
import { ActivityCard } from 'src/app/types/ActivityCard';
import {
  ActivityFilterType,
  FilterGroup,
  Filters,
} from 'src/app/types/Filtering';

@Component({
  selector: 'app-activity-filter',
  templateUrl: './activity-filter.component.html',
  styleUrls: ['./activity-filter.component.scss'],
})
export class ActivityFilterComponent {
  @Input() activities: ActivityCard[] = [];
  @Input() initialFilters: Filters | null = null;
  @Output() applyFiltersEvent = new EventEmitter<Filters>();
  @Output() resetFiltersEvent = new EventEmitter<void>();
  filters: Filters = {} as Filters;
  filterGroups: FilterGroup[] = [];

  showFilter = false;

  constructor(private filterSortService: FilterSortService) {}

  ngOnInit() {
    this.filters = this.filterSortService.initializeFilters();
    this.filterGroups = this.filterSortService.getFilterGroups();
    this.setFiltersToInitial();
  }

  ngOnChanges() {
    this.setFiltersToInitial();
  }

  setFiltersToInitial() {
    if (this.initialFilters) {
      this.filters = { ...this.initialFilters };
    }
  }

  get isAnyFilterActive(): boolean {
    return Object.values(this.filters).some((filterGroup) =>
      Object.values(filterGroup).some((val) => val)
    );
  }

  openFilter(event: Event) {
    event.stopPropagation();
    this.showFilter = true;
  }

  applyFilters() {
    if (!this.isAnyFilterActive) {
      this.resetFiltersEvent.emit();
    }
    this.applyFiltersEvent.emit(this.filters);
    this.closeFilter();
  }

  closeFilter() {
    this.showFilter = false;
  }
  resetFilters() {
    this.filterSortService.initializeFilters();
    this.resetFiltersEvent.emit();
    this.closeFilter();
  }
}
