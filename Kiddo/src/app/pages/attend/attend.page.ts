import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InputFields } from 'src/app/constants/attendInputFields';
import { errorMessages } from 'src/app/constants/AddInputFieldsErrorMessages';
import { ErrorMessages } from 'src/app/types/ErrorMessage';
import { ActionSheetController, AlertController, ModalController } from '@ionic/angular';
import { SuccesModalComponent } from 'src/app/components/succes-modal/succes-modal.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-attend',
  templateUrl: './attend.page.html',
  styleUrls: ['./attend.page.scss'],
})

export class AttendPage implements OnInit {
attendForm!: FormGroup;
InputFields = InputFields;
validationMessages: any; 
errorMessages: ErrorMessages = errorMessages;
successModalVisible: boolean = false;

formControlsConfig = {
  parentName: ['', Validators.required],
  childName: ['', Validators.required],
  email: ['', Validators.required],
  phone: ['', Validators.required],
};

  constructor(private formBuilder: FormBuilder,
              private modalCtrl: ModalController,
              private http: HttpClient) {}

  ngOnInit() {
    this.prepareFormValidation();
    this.attendForm = this.formBuilder.group(this.formControlsConfig);
  }

  makeHttpRequest(): void {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const now = new Date();

    const params = {
      parentName: this.attendForm.value.parentName,
      childName: this.attendForm.value.childName,
      email: this.attendForm.value.email,
      phone: this.attendForm.value.phone,
      createdAt: now,
      updatedAt: now,
    }; 

    console.log('Form Values:', this.attendForm.value); 
    this.http.post('http://localhost:8080/attending/add', params).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  prepareFormValidation() {
    this.attendForm = this.formBuilder.group({
      parentName: ['', Validators.required],
      childName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required] 
    });

    this.validationMessages = {
      'parentName': [
        {type:'required',
        message: 'Dette felt er påkrævet'}
      ],
      'childName': [
        {type:'required',
        message: 'Dette felt er påkrævet'}
      ],
      'email': [
        {type:'required',
        message: 'Dette felt er påkrævet'}
      ],
      'phone': [
        {type:'required',
        message: 'Dette felt er påkrævet'}
      ],
      
    }

    
  }

  showSuccessModal() {
    this.successModalVisible = true;
  }

  closeSuccessModal(){
    this.successModalVisible = false;
    this.modalCtrl.dismiss();
  }

  onBlur(fieldName: string) {
    const control = this.attendForm.get(fieldName);
    if (control) {
      control.markAsTouched();
    }
  }

  submit() {
    if (this.attendForm.valid) {
      this.showSuccessModal();
      this.makeHttpRequest();
      this.saveData();
      this.attendForm.reset();
    } else {
      this.attendForm.markAllAsTouched();
    }
    
  }

  getInputStatus(model: string, prefix: string) {
    const control = this.attendForm.get(model);
    return {
      [`${prefix}-error`]: control?.invalid && control?.touched,
      [`${prefix}-success`]: control?.valid && control?.touched
    };
  }

  private saveData() {
    console.log(this.attendForm)
  }

  cancel() {
    this.modalCtrl.dismiss();
  }


  
  
}
