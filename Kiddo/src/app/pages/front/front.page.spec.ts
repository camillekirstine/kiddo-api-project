import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FrontPage } from './front.page';

describe('FrontPage', () => {
  let component: FrontPage;
  let fixture: ComponentFixture<FrontPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(FrontPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
