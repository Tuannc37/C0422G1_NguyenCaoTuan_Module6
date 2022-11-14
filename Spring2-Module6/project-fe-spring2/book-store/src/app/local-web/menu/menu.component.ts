import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../service/token-storage.service";
import {ShareService} from "../../service/share.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  username: string;
  idPatient: number;
  currentUser: string;
  role: string;
  isLoggedIn: boolean = false;

  constructor(private tokenStorageService: TokenStorageService,
              private shareService : ShareService) {
   shareService.currentLoginStatus.subscribe(status => {
     this.isLoggedIn = status;
   })
  }

  loadHeader(): void {
    if (this.tokenStorageService.getToken()) {
      this.currentUser = this.tokenStorageService.getUser().username;
      this.role = this.tokenStorageService.getUser().roles[0];
      this.username = this.tokenStorageService.getUser().username;
    }
    this.isLoggedIn = this.username != null;
    this.getUsernameAccount();
  }


  ngOnInit(): void {
    this.loadHeader();
  }

  logOut() {
    this.tokenStorageService.signOut();
    this.ngOnInit();
  }

  getUsernameAccount(){
    if (this.tokenStorageService.getToken()) {
      this.idPatient = this.tokenStorageService.getUser().patient.patientId;
    }
  }
}
