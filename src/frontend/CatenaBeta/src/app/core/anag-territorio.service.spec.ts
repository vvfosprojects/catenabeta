import { TestBed } from '@angular/core/testing';

import { AnagTerritorioService } from './anag-territorio.service';

describe('AnagTerritorioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnagTerritorioService = TestBed.get(AnagTerritorioService);
    expect(service).toBeTruthy();
  });
});
