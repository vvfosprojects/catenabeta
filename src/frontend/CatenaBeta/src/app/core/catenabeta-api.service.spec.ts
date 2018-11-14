import { TestBed } from '@angular/core/testing';

import { CatenabetaApiService } from './catenabeta-api.service';

describe('CatenabetaApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatenabetaApiService = TestBed.get(CatenabetaApiService);
    expect(service).toBeTruthy();
  });
});
