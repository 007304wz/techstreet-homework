import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  template: `<div *ngIf="errorMessage !== null" style="color:red; margin-bottom:20px">{{errorMessage}}</div>`
})
export class ErrorMessagesComponent {
  @Input() control: FormControl;
  constructor() { }

  get errorMessage() {
    if (this.control.errors  && this.control.touched) {
      return "Required field";
    }

    return null;
  }
}
