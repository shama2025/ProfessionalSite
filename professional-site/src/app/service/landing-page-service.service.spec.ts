import { TestBed } from '@angular/core/testing';

import { LandingPageServiceService } from './landing-page-service.service';

describe('LandingPageServiceService', () => {
  let service: LandingPageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandingPageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
