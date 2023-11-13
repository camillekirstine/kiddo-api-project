import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllActivitiesPage } from './all-activities.page';
import { mockActivities } from 'src/app/constants/MockActivities';
import { Filters } from 'src/app/types/Filtering';

describe('AllActivitiesPage', () => {
  let component: AllActivitiesPage;
  let fixture: ComponentFixture<AllActivitiesPage>;


  beforeEach(() => {
    fixture = TestBed.createComponent(AllActivitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component = new AllActivitiesPage();
    component.originalActivities = [...mockActivities];
    component.backupActivities = [...mockActivities];
  });

  it('should sort activities by date when sort option is "date"', () => {
    component.handleSortOption('date');
    const firstActivityDate = new Date(component.originalActivities[0].date);
    const lastActivityDate = new Date(
      component.originalActivities[component.originalActivities.length - 1].date
    );
    expect(firstActivityDate.getTime()).toBeLessThanOrEqual(
      lastActivityDate.getTime()
    );
  });

  it('should filter activities based on given criteria', () => {
    const filters: Filters = {
      categories: {
        Kreativt: true,
      },
      ageGroups: {},
      regions: {},
    };
    component.onApplyFilters(filters);
    const allAreKreativt = component.originalActivities.every(
      (activity) => activity.category === 'Kreativt'
    );
    expect(allAreKreativt).toBeTrue();
  });

  it('should reset to original activities on reset filters', () => {
    component.onResetFilters();
    expect(component.originalActivities).toEqual(mockActivities);
  });

  it('should filter after sorting and respect the sort order', () => {
    component.handleSortOption('date');
    const filters: Filters = {
      categories: { Kreativt: true },
      ageGroups: {},
      regions: {}
    };
    component.onApplyFilters(filters);
    const filteredSortedActivities = component.originalActivities;
    
    // Check if results are sorted by date
    for (let i = 0; i < filteredSortedActivities.length - 1; i++) {
      const currentActivityDate = new Date(filteredSortedActivities[i].date);
      const nextActivityDate = new Date(filteredSortedActivities[i + 1].date);
      expect(currentActivityDate.getTime()).toBeLessThanOrEqual(nextActivityDate.getTime());

      const allAreKreativt = filteredSortedActivities.every(activity => activity.category === 'Kreativt');
      expect(allAreKreativt).toBeTrue();
    }
  });

  it('should sort after filtering and respect the filters', () => {
    const filters: Filters = {
      categories: { Kreativt: true },
      ageGroups: {},
      regions: {}
    };
    
    // Apply filters
    component.onApplyFilters(filters);
    
    // Check that the list is correctly filtered
    const filteredActivities = component.originalActivities;
    for (const activity of filteredActivities) {
      expect(activity.category).toEqual('Kreativt');
    }
  
    // Sort the filtered list
    component.handleSortOption('date');
    // Check that the list is correctly sorted
    for (let i = 0; i < filteredActivities.length - 1; i++) {
      expect(filteredActivities[i].date.getTime()).toBeLessThanOrEqual(filteredActivities[i + 1].date.getTime());
    }
  });

  it('should remove sort after filtering and respect the filters', () => {
    const filters: Filters = {
      categories: { Kreativt: true },
      ageGroups: {},
      regions: {}
    };
    
    // Apply filters
    component.onApplyFilters(filters);
    
    // Check that the list is correctly filtered
    const filteredActivities = component.originalActivities;
    for (const activity of filteredActivities) {
      expect(activity.category).toEqual('Kreativt');
    }
  
    // Sort the filtered list
    component.handleSortOption('');
    // Check that the list is correctly sorted
    for (let i = 0; i < filteredActivities.length - 1; i++) {
      expect(filteredActivities[i].date.getTime()).toBeLessThanOrEqual(filteredActivities[i + 1].date.getTime());
    }
  });
});
