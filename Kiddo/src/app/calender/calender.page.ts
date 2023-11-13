import { Component, OnInit } from '@angular/core';
import { ActivitiesserviceService } from '../services/activitiesservice.service';
import { FilterSortService } from '../services/filter-sort.service';
import { mockActivities } from '../constants/MockActivities';
import { ActivityCard } from '../types/ActivityCard';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.page.html',
  styleUrls: ['./calender.page.scss'],
})
export class CalenderPage implements OnInit {
  activities: ActivityCard[] = [];
  sortedActivities: ActivityCard[] = [];
  groupedActivities: { [key: string]: ActivityCard[] } = {};
  selectedDate: any;
  constructor(
    private activityService: ActivitiesserviceService,
    private filterSortService: FilterSortService
  ) {
    this.selectedDate = new Date().toISOString().split('T')[0];
  }

  onDateChange(event: CustomEvent) {
    this.selectedDate = event.detail.value.split('T')[0];
    const activitesOnDate = this.activityService.fetchActivityOnDate(
      this.selectedDate
    );
    this.activities = activitesOnDate;
  }

  sortActivitiesByDate() {
    const groupedActivities = this.filterSortService.sortActivities(
      mockActivities,
      'date'
    );
    this.sortedActivities = groupedActivities;
    this.sortedActivities.forEach((activity) => {
      const dateString = this.activityService.formatDate(activity.date);
      if (!this.groupedActivities[dateString]) {
        this.groupedActivities[dateString] = [];
      }
      this.groupedActivities[dateString].push(activity);
    });
  }

  ngOnInit() {
    const activityOnDate = this.activityService.fetchActivityOnDate(
      this.selectedDate
    );
    this.activities = activityOnDate;
    this.sortActivitiesByDate();
  }
}
