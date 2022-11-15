import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../../service/token-storage.service";
import {ShareService} from "../../service/share.service";
import {Subscription} from "rxjs";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  username: string;
  // idPatient: number;
  currentUser: string;
  role: string;
  isLoggedIn: boolean;


  constructor(private tokenStorageService: TokenStorageService,
              private shareService: ShareService,
              private router: Router) {
    this.shareService.currentLoginStatus.subscribe(status => {
      this.isLoggedIn = status;
    })
  }

  loadHeader(): void {
    if (this.tokenStorageService.getToken() != undefined) {
      this.currentUser = this.tokenStorageService.getUser().userName;
      this.role = this.tokenStorageService.getUser().roles[0];
      this.username = this.tokenStorageService.getUser().userName;
    }
    this.isLoggedIn = this.username != undefined;
    this.getUsernameAccount();
  }


  ngOnInit(): void {
    this.loadHeader();
  }

  logOut() {
    this.tokenStorageService.signOut();
    this.shareService.changeLoginStatus(false);
    this.router.navigateByUrl("")
  }

  getUsernameAccount() {
    if (this.tokenStorageService.getToken()) {
      // this.idPatient = this.tokenStorageService.getUser().patient.patientId;
    }
  }
}
