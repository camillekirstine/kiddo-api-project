import { Component, OnInit } from '@angular/core';
import { mockActivities } from 'src/app/constants/MockActivities';
import { ActivityCard } from 'src/app/types/ActivityCard';
import { ActivitiesserviceService } from 'src/app/services/activitiesservice.service';
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
  shownActivity = mockActivities;
  item = null as any;

  constructor( 
    private activityService: ActivitiesserviceService,
    private activatedRoute: ActivatedRoute,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    
    ) { }
  activityId = this.activatedRoute.snapshot.paramMap.get('id');

  fetchActivityOnId(id: string){
    if(id){
      const activity = mockActivities.find((activity) => activity.id === +id);
      if(activity){
        this.activity = activity;
      } 
    }
  }


  ngOnInit() {
    this.fetchActivityOnId(this.activityId!)
}



async presentModal() {

  const modal = await this.modalCtrl.create({
    component: AttendPage,
    componentProps: this.activity
  });
    
  modal.present();

}




}