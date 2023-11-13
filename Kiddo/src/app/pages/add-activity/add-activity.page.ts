import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { inputFields } from 'src/app/constants/AddInputFields';
import { errorMessages } from 'src/app/constants/AddInputFieldsErrorMessages';
import { ErrorMessages } from 'src/app/types/ErrorMessage';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.page.html',
  styleUrls: ['./add-activity.page.scss'],
})
export class AddActivityPage implements OnInit {
  activityForm!: FormGroup;
  inputFields = inputFields;
  errorMessages: ErrorMessages = errorMessages;
  successModalVisible: boolean = false;

  formControlsConfig = {
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
    title: ['', Validators.required],
    ageGroup: ['', Validators.required],
    category: ['', Validators.required],
    location: ['', Validators.required],
    region: ['', Validators.required],
    date: ['', Validators.required],
    time: ['', Validators.required],
    description: ['',],
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.activityForm = this.formBuilder.group(this.formControlsConfig);
  }

  showSuccessModal() {
    this.successModalVisible = true;
  }

  closeSuccessModal(){
    this.successModalVisible = false;
  }

  onBlur(fieldName: string) {
    const control = this.activityForm.get(fieldName);
    if (control) {
      control.markAsTouched();
    }
  }

  submit() {
    if (this.activityForm.valid) {
      this.showSuccessModal();        
      this.saveData();
      this.activityForm.reset();
    } else {
      this.activityForm.markAllAsTouched();
    }
  }

  getInputStatus(model: string, prefix: string) {
    const control = this.activityForm.get(model);
    return {
      [`${prefix}-error`]: control?.invalid && control?.touched,
      [`${prefix}-success`]: control?.valid && control?.touched
    };
  }

  private saveData() {
    
  }
}
