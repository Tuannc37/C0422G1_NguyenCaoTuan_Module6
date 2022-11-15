import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../service/auth.service";
import {TokenStorageService} from "../service/token-storage.service";
import {ShareService} from "../service/share.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  username: string;
  errorMessage = '';
  roles: string[] = [];
  returnUrl: string;
  checkLogin: boolean = false;

  constructor(private formBuild: FormBuilder,
              private tokenStorageService: TokenStorageService,
              private authService: AuthService,
              private router: Router,
              private toastr: ToastrService,
              private route: ActivatedRoute,
              private shareService: ShareService) { }


  ngOnInit(): void {
    this.formGroup = this.formBuild.group({
        username: [''],
        password: [''],
        remember_me: ['']
      }
    );

    if (this.tokenStorageService.getToken() != undefined) {
      const user = this.tokenStorageService.getUser();
      this.authService.isLoggedIn = true;
      this.checkLogin = true;
      this.roles = this.tokenStorageService.getUser().roles;
      this.username = this.tokenStorageService.getUser().username;
    }
    if (this.checkLogin) {
      this.router.navigateByUrl('')
    }
  }

  onSubmit() {
    this.authService.login(this.formGroup.value).subscribe(
      data => {
        if (this.formGroup.value.remember_me) {
          this.tokenStorageService.saveTokenLocal(data.accessToken);
          this.tokenStorageService.saveUserLocal(data);
        } else {
          this.tokenStorageService.saveTokenSession(data.accessToken);
          this.tokenStorageService.saveUserLocal(data);
        }

        this.authService.isLoggedIn = true;
        this.username = this.tokenStorageService.getUser().username;
        this.roles = this.tokenStorageService.getUser().roles;
        this.formGroup.reset();
        this.router.navigateByUrl(this.returnUrl);
        this.shareService.changeLoginStatus(true);
      },
      err => {
        console.log(err)
        this.authService.isLoggedIn = false;
        Swal.fire('Đăng nhập thất bại: ', 'Sai tên đăng nhập hoặc mật khẩu hoặc tài khoản chưa được kích hoạt!', 'warning');
      }
    );
  }
}
