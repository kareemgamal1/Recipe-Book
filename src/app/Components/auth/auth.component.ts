import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AlertComponent } from '../alert/alert.component';
import { PlaceHolderDirective } from '../shared/placeholder/placeholder';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, OnDestroy {
  AuthForm: FormGroup;
  isLoggedIn = false;
  isLoading = false;
  error: string = null;
  @ViewChild(PlaceHolderDirective, { static: false })
  alertHost: PlaceHolderDirective;
  subscribeInstance: Subscription;
  constructor(private auth: AuthService, private router: Router) {}
  ngOnDestroy(): void {
    if (this.subscribeInstance) {
      this.subscribeInstance.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.AuthForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      password: new FormControl(null),
    });
  }

  onSwitchMode() {
    this.isLoggedIn = !this.isLoggedIn;
    this.error = null;
  }

  onSubmit() {
    if (!this.AuthForm.valid) {
      return;
    }
    const email = this.AuthForm.get('email').value;
    const password = this.AuthForm.get('password').value;
    let authObs: Observable<AuthResponseData>;
    this.isLoading = true;
    if (this.isLoggedIn) {
      authObs = this.auth.login(email, password);
    } else {
      authObs = this.auth.signup(email, password);
    }
    authObs.subscribe(
      (resData) => {
        setTimeout(() => {
          this.isLoading = false;
          this.router.navigate(['/recipes']);
        }, 200);
      },
      (errorRes) => {
        console.log(errorRes);
        this.error = errorRes;
        this.showErrorAlert(errorRes);
        this.isLoading = false;
      }
    );
    this.AuthForm.reset();
  }
  onHandleError() {
    this.error = null;
  }

  private showErrorAlert(message: string) {
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(AlertComponent);
    componentRef.instance.message = message;
    this.subscribeInstance = componentRef.instance.closeAlert.subscribe(() => {
      this.subscribeInstance.unsubscribe();
      hostViewContainerRef.clear();
    });
  }
}
