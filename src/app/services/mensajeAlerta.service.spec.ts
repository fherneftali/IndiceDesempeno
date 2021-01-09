/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MensajeAlertaService } from './mensajeAlerta.service';

describe('Service: MensajeAlerta', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MensajeAlertaService]
    });
  });

  it('should ...', inject([MensajeAlertaService], (service: MensajeAlertaService) => {
    expect(service).toBeTruthy();
  }));
});
