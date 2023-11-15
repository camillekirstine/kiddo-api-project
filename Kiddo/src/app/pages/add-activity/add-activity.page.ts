import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { inputFields } from 'src/app/constants/AddInputFields';
import { errorMessages } from 'src/app/constants/AddInputFieldsErrorMessages';
import { ErrorMessages } from 'src/app/types/ErrorMessage';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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
    title: ['', [Validators.required, Validators.minLength(2)]],
    subtitle: ['', [Validators.required]],
    participants: ['', [Validators.required, Validators.maxLength(2)]],
    ageGroup: ['', Validators.required],
    category: ['', Validators.required],
    location: ['', Validators.required],
    region: ['', Validators.required],
    date: ['', Validators.required],
    time: ['', Validators.required],
    description: ['',],
    image: ['', Validators.required],
  };

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient) {}

  ngOnInit() {
    this.activityForm = this.formBuilder.group(this.formControlsConfig);
  }

  makeHttpRequest(): void {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const now = new Date();

    const params = {
      title: this.activityForm.value.title,
      subtitle: this.activityForm.value.subtitle,
      description: this.activityForm.value.description,
      agegroup: this.activityForm.value.ageGroup,
      time: this.activityForm.value.time,
      date: this.activityForm.value.date, 
      participants: this.activityForm.value.participants,
      location: this.activityForm.value.location,
      category: this.activityForm.value.category,
      region: this.activityForm.value.region,
      image: this.activityForm.value.image,
      createdAt: now,
      updatedAt: now,
    }; 

    console.log('Form Values:', this.activityForm.value); 
    this.http.post('http://localhost:8080/activities/add', params).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
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
      this.makeHttpRequest();      
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
