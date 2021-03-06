import { Component, OnInit, AfterViewInit } from "@angular/core";
import { AuthenticationService } from "./../../services/authentication.service";
import { Alert } from "./../../shared/alert";
import { Loader } from "./../../shared/loader";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private alertBox: Alert,
    private loaderBox: Loader
  ) {}

  ngOnInit() {}

  ionViewDidLoad() {}
  loginUser() {
    let isLoginSuccess = false;

    // Call authentication web service here

    if (!isLoginSuccess) {
      // this.alertBox.show("Failed", "Test", ["OK"]);
      this.loaderBox.present();

      setTimeout(() => {
        this.loaderBox.dismiss();
    }, 5000);
    } else {
      this.authService.login();
    }
  }
}
