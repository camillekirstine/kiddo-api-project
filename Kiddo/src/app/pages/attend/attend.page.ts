import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { inputFields } from 'src/app/constants/AddInputFields';
import { errorMessages } from 'src/app/constants/AddInputFieldsErrorMessages';
import { ErrorMessages } from 'src/app/types/ErrorMessage';
import { ActionSheetController, AlertController, ModalController } from '@ionic/angular';
import { SuccesModalComponent } from 'src/app/components/succes-modal/succes-modal.component';

@Component({
  selector: 'app-attend',
  templateUrl: './attend.page.html',
  styleUrls: ['./attend.page.scss'],
})
export class AttendPage implements OnInit {

attendForm!: FormGroup;
validationMessages: any; 
errorMessages: ErrorMessages = errorMessages;
successModalVisible: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private modalCtrl: ModalController) {}

  ngOnInit() {
    this.prepareFormValidation();
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
      this.saveData();
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
