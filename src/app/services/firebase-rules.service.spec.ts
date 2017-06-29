import { TestBed, inject } from '@angular/core/testing';

import { FirebaseRulesService } from './firebase-rules.service';

describe('FirebaseRulesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseRulesService]
    });
  });

  it('should be created', inject([FirebaseRulesService], (service: FirebaseRulesService) => {
    expect(service).toBeTruthy();
  }));
});
