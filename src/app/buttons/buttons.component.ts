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
  buttons;

  constructor(private buttonService: ButtonService) { }

  ngOnInit() {
    this.initializeButtons();
  }

  initializeButtons(): void {
    this.buttonService.buttonsStream().subscribe((buttons) => {
        this.buttons = buttons;
        console.log(this.buttons);
    });
  }

}
