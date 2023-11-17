import { TestBed } from '@angular/core/testing';

import { YouractivitiesService } from './youractivities.service';

describe('YouractivitiesService', () => {
  let service: YouractivitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YouractivitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
