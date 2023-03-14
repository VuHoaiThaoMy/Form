import { TestBed } from '@angular/core/testing';

import { ConsoleLogServiceService } from './console-log-service.service';

describe('ConsoleLogServiceService', () => {
  let service: ConsoleLogServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsoleLogServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
