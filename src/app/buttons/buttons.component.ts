import { Component, OnInit } from '@angular/core';

import { ButtonService } from '../button.service';

import { Button } from '../button.model';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  providers: [ButtonService]
})
export class ButtonsComponent implements OnInit {
  buttons: Button[];

  constructor(private buttonService: ButtonService) { }

  ngOnInit() {
    this.getButtons();
  }

  getButtons(): void {
    this.buttons = this.buttonService.getButtons();
  }

}
