import { TestBed } from '@angular/core/testing';

import { GroupTypesApiService } from './group-types-api.service';

describe('GroupTypesApiService', () => {
  let service: GroupTypesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupTypesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
