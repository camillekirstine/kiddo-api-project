import { Component, OnInit } from '@angular/core';
import { ActivityCard } from 'src/app/types/ActivityCard';
import { ActivitiesService } from 'src/app/services/activitiesservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  activitiySubscription: Subscription = new Subscription;
  originalActivities: ActivityCard[] = [];

  constructor(
    private activitiesService: ActivitiesService
  ) { }

  ngOnInit(): void {
    try {
      this.activitiySubscription = this.activitiesService.getActivities()
        .subscribe((activities: ActivityCard[]) => {
          this.originalActivities = activities;
        }, (error: any) => {
          console.error('Failed to fetch activities:', error);
          // Handle the error here
        });
    } catch (error) {
      console.error('Failed to fetch activities:', error);
      // Handle the error here
    }
  }

}
