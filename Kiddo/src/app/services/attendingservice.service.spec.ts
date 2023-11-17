import { TestBed } from '@angular/core/testing';

import { AttendingserviceService } from './attendingservice.service';

describe('AttendingserviceService', () => {
  let service: AttendingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttendingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
