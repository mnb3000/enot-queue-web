import { TestBed } from '@angular/core/testing';

import { NavbarTextService } from './navbar-text.service';

describe('NavbarTextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavbarTextService = TestBed.get(NavbarTextService);
    expect(service).toBeTruthy();
  });
});
