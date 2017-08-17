import { Component, OnInit, Input } from '@angular/core';

import { Button } from '../button.model';

import { Http } from '@angular/http';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() button: Button;
  constructor(private http: Http) { }

  buttonAction(url): void {
    this.http.get(url).subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
