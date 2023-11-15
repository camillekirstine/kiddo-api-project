import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivityCard } from 'src/app/types/ActivityCard';
import { ActivitiesService } from 'src/app/services/activitiesservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.page.html',
  styleUrls: ['./search-results.page.scss'],
})
export class SearchResultsPage implements OnInit {

  activities: ActivityCard[] = [];
  query: string = '';
  activitySubscription: Subscription = new Subscription;

  constructor(private route: ActivatedRoute, private activitiesService: ActivitiesService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.query = params['q'];
      this.fetchActivities();
    });
  }

  fetchActivities() {
    this.activitySubscription = this.activitiesService.getActivities()
      .subscribe(
        activities => {
          this.activities = activities.filter(activity =>
            activity.title.toLowerCase().includes(this.query.toLowerCase())
          );
        },
        error => {
          console.error('Failed to fetch activities:', error);
          // Handle the error here
        }
      );
  }

  ngOnDestroy() {
    if (this.activitySubscription) {
      this.activitySubscription.unsubscribe();
    }
  }

}
