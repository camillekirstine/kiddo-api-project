import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AttendPage } from './attend.page';

describe('AttendPage', () => {
  let component: AttendPage;
  let fixture: ComponentFixture<AttendPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(AttendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
