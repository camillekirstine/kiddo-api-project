import { Component, OnInit } from '@angular/core';
import { ActivityCard } from 'src/app/types/ActivityCard';
import { Subscription } from 'rxjs';
import { AttendingService } from 'src/app/services/attendingservice.service';
import { YourActivitiesService } from 'src/app/services/youractivities.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  activitiySubscription: Subscription = new Subscription;
  attendingSub: Subscription = new Subscription;
  originalActivities: ActivityCard[] = [];
  attendingActivities: ActivityCard[] = [];

  


  constructor(
    private yourActivities: YourActivitiesService,
    private attendingService: AttendingService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    try {
      this.activitiySubscription = this.yourActivities.getActivities()
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
    
    console.log(this.yourActivities)

    try {
      this.attendingSub = this.attendingService.getAttending()
        .subscribe((activities: ActivityCard[]) => {
          this.attendingActivities = activities;
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




