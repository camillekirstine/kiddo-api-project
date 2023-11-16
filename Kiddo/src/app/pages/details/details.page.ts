import { Component, OnInit } from '@angular/core';
import { ActivityCard } from 'src/app/types/ActivityCard';
import { ActivitiesService } from 'src/app/services/activitiesservice.service';
import { ActionSheetController, AlertController, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AttendPage } from '../attend/attend.page';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  activity: ActivityCard = {} as ActivityCard;
  shownActivity: ActivityCard[] = [];
  item = null as any;

  constructor(
    private activitiesService: ActivitiesService,
    private activatedRoute: ActivatedRoute,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
  ) {}

  activityId: number;

  fetchActivityOnId(id: number) {
    if (id) {
      const activity = this.shownActivity.find(activity => activity.id === id);
      if (activity) {
        this.activity = activity;
      }
    }
    this.activityId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activityId);

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      this.activityId = id ? Number(id) : undefined;
      this.activitiesService.getActivities().subscribe(activities => {
        this.shownActivity = activities;
        this.fetchActivityOnId(this.activityId);
      });
    });
  }
  

  async presentModal(activityId: number) {
    const modal = await this.modalCtrl.create({
      component: AttendPage,
      componentProps: {
        activityId: activityId
      },
    });


    await modal.present();
  }
}
