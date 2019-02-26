import { TestBed } from '@angular/core/testing';

import { Xr33ModelliApiService } from './xr33Modelli-api.service';

describe('Xr33ModelliApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Xr33ModelliApiService = TestBed.get(Xr33ModelliApiService);
    expect(service).toBeTruthy();
  });
});
