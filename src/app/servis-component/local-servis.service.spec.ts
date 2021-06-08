import { TestBed } from '@angular/core/testing';

import { LocalServisService } from './local-servis.service';

describe('LocalServisService', () => {
  let service: LocalServisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalServisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
