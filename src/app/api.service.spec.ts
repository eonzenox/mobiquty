import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ErgastService } from './api.service';

describe('ErgastService', () => {
  let service: ErgastService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});
    service = TestBed.inject(ErgastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
