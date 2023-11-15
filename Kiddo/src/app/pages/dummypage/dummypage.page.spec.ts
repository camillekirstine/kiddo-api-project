import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DummypagePage } from './dummypage.page';

describe('DummypagePage', () => {
  let component: DummypagePage;
  let fixture: ComponentFixture<DummypagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DummypagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
