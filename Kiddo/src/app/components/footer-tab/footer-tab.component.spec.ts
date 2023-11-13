import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FooterTabComponent } from './footer-tab.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('FooterTabComponent', () => {
  let component: FooterTabComponent;
  let fixture: ComponentFixture<FooterTabComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterTabComponent ],
      imports: [IonicModule.forRoot(), NoopAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
