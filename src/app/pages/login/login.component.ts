import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = "";
  password = "";
  clearPassword = false;
  toggleType = "password";

  showPassword() {
    if (this.clearPassword == false) {
      this.clearPassword = true;
      this.toggleType = "text";
    } else {
      this.clearPassword = false;
      this.toggleType = "password";
    }
  }
}
