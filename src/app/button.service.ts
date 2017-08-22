import { Injectable } from '@angular/core';

import { Button } from './button.model';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ButtonService {

  constructor(private http: Http) { }

  public getUrl() {
    return 'http://192.168.1.200:8080';
  }

  buttonsStream() {
    return this.http.get(this.getUrl() + '/dispositivo/?format=json').map((response) : Button[] => {
        return response.json();
    });
  }

}
