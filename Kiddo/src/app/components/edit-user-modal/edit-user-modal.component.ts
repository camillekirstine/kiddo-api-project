import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.scss'],
})
export class EditUserModalComponent  implements OnInit {
  @ViewChild(IonModal) modal: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  userName: string; 
  userEmail: string; 
  userPhone: string; 
  userAddress: string; 
  userPicture: any;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    const apiUrl = 'http://localhost:8080/users/update/:id'; 
    const params = {
      userName: this.userName,
      userEmail: this.userEmail,
      userPhone: this.userPhone,
      userAddress: this.userAddress,
      userPicture: this.userPicture
      
    }; 

    this.http.put(apiUrl, params).subscribe(
      (response) => {
        console.log('response');
      },
      (error) => {
        console.error('error');
      }
    ); 

    this.modal.dismiss('confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  constructor( private http: HttpClient) { }

  ngOnInit() {}

}
