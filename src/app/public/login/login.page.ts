import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "./../../services/authentication.service";
import { Alert } from "./../../shared/alert";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private alertBox: Alert,
  ) {}

  ngOnInit() {}

  loginUser() {
    let isLoginSuccess = false;

    // Call authentication web service here

    if (!isLoginSuccess) {
      this.alertBox.show("Failed", "Test", ["OK"]);
    } else {
      this.authService.login();
    }
  }
}
