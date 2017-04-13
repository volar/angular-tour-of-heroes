/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FaceRecognitionService } from './face-recognition.service';

describe('FaceRecognitionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FaceRecognitionService]
    });
  });

  it('should ...', inject([FaceRecognitionService], (service: FaceRecognitionService) => {
    expect(service).toBeTruthy();
  }));
});
