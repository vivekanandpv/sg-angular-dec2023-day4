import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { RestService } from '../rest.service';
import { LoginViewModel } from '../models';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;
  loginResponse?: Observable<LoginViewModel>;

  constructor(
    fb: FormBuilder,
    private restService: RestService,
    private demo: DemoService
  ) {
    this.form = fb.group({
      username: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      checkMeOut: [false],
    });
  }

  get username(): FormControl {
    return this.form.controls['username'] as FormControl;
  }

  get password(): FormControl {
    return this.form.controls['password'] as FormControl;
  }

  get checkMeOut(): FormControl {
    return this.form.controls['checkMeOut'] as FormControl;
  }

  onSubmit() {
    this.form.markAsDirty();

    if (this.form.valid) {
      this.loginResponse = this.restService.post<
        LoginViewModel,
        LoginViewModel
      >('/posts', this.form.value);
    } else {
      alert('Invalid form');
    }
  }
}
