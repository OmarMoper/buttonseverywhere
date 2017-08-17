import { Injectable } from '@angular/core';

import { Button } from './button.model';

@Injectable()
export class ButtonService {

  constructor() { }

  getButtons(): Button[] {
    return [
      {
        url: 'http://192.168.1.200:8080/api/dispositivo/LED/on',
        name: 'Encender LED'
      },
      {
        url: 'http://192.168.1.200:8080/api/dispositivo/LED/off',
        name: 'Apagar LED'
      }
    ];
  }
}
