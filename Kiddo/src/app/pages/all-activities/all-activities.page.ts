import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { mockActivities } from 'src/app/constants/MockActivities';
import { FilterSortService } from 'src/app/services/filter-sort.service';
import { ActivityCard } from 'src/app/types/ActivityCard';
import {
  ActivityFilterType,
  AgeGroup,
  Category,
  FilterGroup,
  FilterKeys,
  Filters,
  Region,
} from 'src/app/types/Filtering';

type QueryParams = {
  category?: Category;
  ageGroup?: AgeGroup;
  region?: Region;
};

@Component({
  selector: 'app-all-activities',
  templateUrl: './all-activities.page.html',
  styleUrls: ['./all-activities.page.scss'],
})
export class AllActivitiesPage implements OnInit {
  originalActivities: ActivityCard[] = mockActivities;
  backupActivities: ActivityCard[] = [...this.originalActivities];
  sortedActivities: ActivityCard[] = [...this.backupActivities];

  activeFilterLabels: ActivityFilterType[] = [];
  currentFilters: Filters | null = null;
  filterGroups: FilterGroup[] = [];

  initialCategory: string = '';

  constructor(
    private filterSortService: FilterSortService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.filterGroups = filterSortService.getFilterGroups();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.handleQueryParams(params);
    });
  }

  private handleQueryParams(params: QueryParams): void {
    this.currentFilters = this.filterSortService.initializeFilters();

    const initialCategory = params.category;
    if (initialCategory && this.currentFilters.categories[initialCategory] !== undefined) {
      this.currentFilters.categories[initialCategory] = true;
      this.onApplyFilters(this.currentFilters);
    }
  }

  removeFilter(filter: ActivityFilterType) {
    if (!this.currentFilters) return;

    for (const group of this.filterGroups) {
      const filterType = group.filterType;

      if (group.keys.includes(filter)) {
        this.currentFilters[filterType][filter] = false;
        break;
      }
    }

    const activeFilters = this.filterSortService.getActiveFilters(this.currentFilters);
    if (!activeFilters.length) {
      this.currentFilters = null;
      if (this.initialCategory) {
        this.updateUrlWithoutQuery();
      }
    }

    this.onApplyFilters(this.currentFilters);
  }

  handleSortOption(sortOption: string) {
    this.sortedActivities = this.filterSortService.sortActivities(
      this.backupActivities,
      sortOption
    );
    if (this.currentFilters) {
      this.onApplyFilters(this.currentFilters);
    } else {
      this.originalActivities = [...this.sortedActivities];
    }
  }

  onApplyFilters(filters: Filters | null) {
    if (!filters) {
      this.onResetFilters();
      this.updateUrlWithoutQuery();
    } else {
      this.currentFilters = { ...filters };
      this.activeFilterLabels = this.filterSortService.getActiveFilters(this.currentFilters);
      this.originalActivities = this.filterSortService.filterActivities(
        this.sortedActivities,
        filters
      );
    }
  }

  onResetFilters() {
    this.originalActivities = [...this.sortedActivities];
    this.currentFilters = null;
    this.activeFilterLabels = [];
  }

  updateUrlWithoutQuery() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {},
    });
  }
}
