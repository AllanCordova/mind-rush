import { TestBed } from '@angular/core/testing';

import { QuizApiServiceService } from './quiz-api-service.service';

describe('QuizApiServiceService', () => {
  let service: QuizApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
