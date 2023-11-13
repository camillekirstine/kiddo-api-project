import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mockActivities } from 'src/app/constants/MockActivities';
import { ActivityCard } from 'src/app/types/ActivityCard';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.page.html',
  styleUrls: ['./search-results.page.scss'],
})
export class SearchResultsPage implements OnInit {

  activities: ActivityCard[] = [];
  query: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.query = params['q'];
      this.activities = mockActivities.filter(activity => 
        activity.title.toLowerCase().includes(this.query.toLowerCase())
      );
    });
  }

}
