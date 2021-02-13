import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    loginform: FormGroup;
    username = new FormControl();
    password = new FormControl();
    submitMessage: string;
    token: string;

    constructor (private authService: AuthenticationService, private routerService: RouterService) {
      this.loginform = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    }

    loginSubmit() {
      // if (this.loginform.valid) {
      const map = this.loginform.value;
      this.authService.authenticateUser(map).subscribe(
        (resp) => {
           this.token = JSON.parse(JSON.stringify(resp)).token;
          this.authService.setBearerToken(this.token);
          this.routerService.routeToDashboard();
        },
        (err) => {
          if (err.status === 404) {
          this.submitMessage = err.message;
          }else {
            this.submitMessage = err.error.message;
          }
        }
    );
  // } else {
  //     this.submitMessage = 'Invalid Login Credentials';
  //   }
    }
}
