import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddActivityNewPage } from './add-activity-new.page';

describe('AddActivityNewPage', () => {
  let component: AddActivityNewPage;
  let fixture: ComponentFixture<AddActivityNewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddActivityNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
