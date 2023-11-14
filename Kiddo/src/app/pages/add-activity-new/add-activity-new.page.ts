import { Component } from '@angular/core';
import { Activity } from 'src/app/models/activity.model';
import { ActivityService } from 'src/app/services/activity.service';

// import { ActivityCard } from 'src/app/types/ActivityCard';
// import { mockActivities } from 'src/app/constants/MockActivities';
// import { CardComponent } from 'src/app/components/card.component';

@Component({
  selector: 'app-add-activity-new',
  templateUrl: 'add-activity-new.page.html',
  styleUrls: ['add-activity-new.page.scss'],
})
export class AddActivityNewPage {
  // originalActivities: ActivityCard[] = mockActivities;
  // backupActivities: ActivityCard[] = [...this.originalActivities];
  // sortedActivities: ActivityCard[] = [...this.backupActivities];

activities: Activity [] = [];

constructor(private activityService: ActivityService) { }

ngOnInit(): void {
    this.retrieveActivities();
  }

  retrieveActivities(): void {
    this.activityService.getAll()
      .subscribe(
        data => {
          this.activities = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
