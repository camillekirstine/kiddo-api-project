import { Component, Input, OnInit } from '@angular/core';
import { ActivityCard } from '../../types/ActivityCard';
import { ActivitiesService } from 'src/app/services/activitiesservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityService } from 'src/app/services/activity.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { YourActivitiesService } from 'src/app/services/youractivities.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})

export class ListComponent  implements OnInit {
[x: string]: any;
 
  originalActivities: ActivityCard[] = [];
  attendingActivities: ActivityCard[] = [];
  @Input() activity: ActivityCard = {
    id: 0,
    userId: 0,
    title: "Title",
    subtitle: "Subtitle",
    description: "Description",
    agegroup: "0-3 år",
    time: "00.00",
    date: new Date(2023-15-11),
    particapants: 0,
    location: "location",
    category: "Gaming",
    region: "Hovedstaden",
    createdAt: "createdAt",
    updatedAt: "updatedAt",
    image: "string"
  };

  @Input() showImage: boolean = true;

  constructor(
    private youActivities: YourActivitiesService,
    private http: HttpClient,

    private activityService: ActivityService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

    id: number;

  ngOnInit() {
    this.youActivities.fetchActivities();
  }

  makeHttpRequest(activityId: number): void {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
  
    this.http.delete(`http://localhost:8080/activities/delete/${activityId}`, { headers }).subscribe(
      () => {
        console.log('Deleted successfully');
        // Update the originalActivities array to remove the deleted activity
        this.originalActivities = this.originalActivities.filter(activity => activity.id !== activityId);
      },
      (error) => {
        console.error(error);
        // Handle the error here
      }
    );
  }
  
 
  
  


}
