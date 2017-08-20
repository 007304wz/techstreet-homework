import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  template: `<div *ngIf="errorMessage !== null" style="color:red">{{errorMessage}}</div>`
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
