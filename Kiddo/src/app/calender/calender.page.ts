import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../services/activitiesservice.service';
import { FilterSortService } from '../services/filter-sort.service';
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
    private activitiesService: ActivitiesService,
    private filterSortService: FilterSortService
  ) {
    this.selectedDate = new Date().toISOString().split('T')[0];
  }

  onDateChange(event: CustomEvent) {
    this.selectedDate = event.detail.value.split('T')[0];
    const activitesOnDate = this.activitiesService.fetchActivityOnDate(
      this.selectedDate
    );
    this.activities = activitesOnDate;
  }

  sortActivitiesByDate() {
    const groupedActivities = this.filterSortService.sortActivities(
      this.activities,
      'date'
    );
    this.sortedActivities = groupedActivities;
    this.sortedActivities.forEach((activity) => {
      const dateString = this.activitiesService.formatDate(activity.date);
      if (!this.groupedActivities[dateString]) {
        this.groupedActivities[dateString] = [];
      }
      this.groupedActivities[dateString].push(activity);
    });
  }

  ngOnInit() {
    const activityOnDate = this.activitiesService.fetchActivityOnDate(
      this.selectedDate
    );
    this.activities = activityOnDate;
    this.sortActivitiesByDate();
  }
}
