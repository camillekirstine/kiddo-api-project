import { Injectable } from '@angular/core';
import { ActivityCard } from '../types/ActivityCard';
import {
  ActivityFilterType,
  AgeGroup,
  Category,
  FilterGroup,
  Filters,
  Region,
} from '../types/Filtering';
import { FILTER_DEFINITIONS } from '../constants/FilterDefinitions';

@Injectable({
  providedIn: 'root',
})
export class FilterSortService {
  private filterGroups: FilterGroup[] = this.generateFilterGroups();

  getFilterGroups(): FilterGroup[] {
    return this.filterGroups;
  }
  constructor() {}


  private generateFilterGroups(): FilterGroup[] {
      const groups: FilterGroup[] = [];
      for (const [key, definition] of Object.entries(FILTER_DEFINITIONS)) {
          const filterType = key as keyof Filters;
          groups.push({
              label: definition.label,
              keys: definition.values as (Category | AgeGroup | Region)[],
              filterType,
              collapsed: true,
          });
      }
      return groups;
  }

  initializeFilters(): Filters {
    const filters: Filters = {} as Filters;
    for (const [key, definition] of Object.entries(FILTER_DEFINITIONS)) {
      const filterType = key as keyof Filters;
      filters[filterType] = this.createFilterRecord(definition.values);
    }
    return filters;
  }

  private createFilterRecord(keys: string[]): Record<string, boolean> {
    const record: Record<string, boolean> = {};
    for (const key of keys) {
      record[key] = false;
    }
    return record;
  }

  sortActivities(
    activities: ActivityCard[],
    sortOption: string
  ): ActivityCard[] {
    if (sortOption === '') {
      return activities;
    }
    switch (sortOption) {
      case 'date':
        return [...activities].sort((a, b) => {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          return dateA - dateB;
        });
      default:
        return activities;
    }
  }

  filterActivities(
    activities: ActivityCard[],
    filters: Filters
  ): ActivityCard[] {
    const areAllFiltersInactive = !['categories', 'ageGroups', 'regions'].some(group => Object.values(filters[group as keyof Filters]).includes(true));

    if (areAllFiltersInactive) {
      return activities;
    }

    return activities.filter((activity) => {
      const categoryMatch = filters.categories[activity.category];
      const ageGroupMatch = filters.ageGroups[activity.agegroup];
      const regionMatch = filters.regions[activity.region];
      return categoryMatch || ageGroupMatch || regionMatch;
    });
  }

  getActiveFilters(currentFilters: Filters): ActivityFilterType[] {
    if (!currentFilters) return [];
  
    return Object.values(currentFilters).flatMap(group =>
      Object.entries(group)
        .filter(([_key, value]) => value)
        .map(([key]) => key as ActivityFilterType)
    );
  }
}
