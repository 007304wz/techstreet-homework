import {TestBed, inject, async, ComponentFixture} from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { AngularMessageComponent } from '../angular/message.component';
import { Piped } from '../angular/pipe';
import { AngularService } from '../angular/service';
import { ErrorMessagesComponent } from './error-msg.component';
import {LoginService} from "./login.service";


describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent> = null;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        AngularMessageComponent,
        Piped,
        ErrorMessagesComponent
      ],
      imports: [ ReactiveFormsModule, FormsModule ],
      providers: [ AngularService, LoginService ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Techstreet Homework'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Techstreet Homework');
  }));

  it('should render title in a h1 tag', async(() => {
    // const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Techstreet Homework');
  }));

  it('should show problem 2 if value of directive is 1 ', async(() => {
    const storage = window.localStorage;
    storage.setItem('directive', '1');
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('Problem 2');
  }));

  it('should save fake user if username != Techstreet or password != homework',
    inject([LoginService], (loginService) => {
      loginService.login('wang', '1122');
      fixture.detectChanges();
      const storage = window.localStorage;
      expect(JSON.parse(storage.getItem('currentUser')).username).toEqual('Fake User');
    }));

  it('should save Techstreet user if username == Techstreet and password == homework',
    inject([LoginService], (loginService) => {
      loginService.login('Techstreet', 'homework');
      fixture.detectChanges();
      const storage = window.localStorage;
      expect(JSON.parse(storage.getItem('currentUser')).username).toEqual('Techstreet');
    }));
});
