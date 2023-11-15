import { Component, OnInit } from '@angular/core';
import { ActivityCard } from 'src/app/types/ActivityCard';
import { ActivitiesService } from 'src/app/services/activitiesservice.service';


@Component({
  selector: 'app-front',
  templateUrl: './front.page.html',
  styleUrls: ['./front.page.scss'],
})
export class FrontPage implements OnInit {
  originalActivities: ActivityCard[] = [];

  
  constructor(private activitiesService: ActivitiesService) { 
   
  }

  ngOnInit() {
    this.fetchActivities();
  }

  fetchActivities() {
    this.activitiesService.getActivities().subscribe(
      activities => {
        // Sort activities based on createdAt in descending order
        this.originalActivities = activities.sort((a, b) => {
          const createdAtA = new Date(a.createdAt).getTime();
          const createdAtB = new Date(b.createdAt).getTime();
          return createdAtB - createdAtA;
        });
      },
      error => {
        console.error('Failed to fetch activities:', error);
        // Handle the error here
      }
    );
  }
  


}
