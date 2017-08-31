import { TestBed, inject } from '@angular/core/testing';

import { DocListService } from './doc-list.service';

describe('DocListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocListService]
    });
  });

  it('should be created', inject([DocListService], (service: DocListService) => {
    expect(service).toBeTruthy();
  }));
});
