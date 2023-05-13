import { TestBed } from '@angular/core/testing';

import { CubeControlsService } from './cube-controls.service';

describe('CubeControlsService', () => {
  let service: CubeControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CubeControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
