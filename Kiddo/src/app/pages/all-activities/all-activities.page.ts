import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
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
import { ActivitiesService } from 'src/app/services/activitiesservice.service';
import { Subscription } from 'rxjs';

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
  activitiySubscription: Subscription = new Subscription;
  originalActivities: ActivityCard[] = [];
  backupActivities: ActivityCard[] = [];
  sortedActivities: ActivityCard[] = [];

  activeFilterLabels: ActivityFilterType[] = [];
  currentFilters: Filters | null = null;
  filterGroups: FilterGroup[] = [];

  initialCategory: string = '';

  constructor(
    private filterSortService: FilterSortService,
    private route: ActivatedRoute,
    private router: Router,
    private activitiesService: ActivitiesService
  ) {
    this.filterGroups = filterSortService.getFilterGroups();
  }

  ngOnInit(): void {
    try {
      this.activitiySubscription = this.activitiesService.getActivities()
        .subscribe((activities: ActivityCard[]) => {
          this.originalActivities = activities;
          this.backupActivities = [...this.originalActivities];
          this.sortedActivities = [...this.backupActivities];
        }, (error: any) => {
          console.error('Failed to fetch activities:', error);
          // Handle the error here
        });
    } catch (error) {
      console.error('Failed to fetch activities:', error);
      // Handle the error here
    }
  }
  
  // Don't forget to unsubscribe in ngOnDestroy() to avoid memory leaks
  ngOnDestroy(): void {
    if (this.activitiySubscription) {
      this.activitiySubscription.unsubscribe();
    }
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
    this.originalActivities = [...this.originalActivities];
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
