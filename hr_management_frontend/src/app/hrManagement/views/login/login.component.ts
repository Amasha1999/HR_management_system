import {Component, HostListener, OnInit} from '@angular/core';
import {UserLoginDto} from "../../dto/UserLoginDto";
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";
import {ToastrService} from "ngx-toastr";
import {GlobalErrorHandler} from "../../errorHandler/GlobalErrorHandler";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLoginDto: UserLoginDto = new UserLoginDto();

  elem: any;

  ngOnInit(): void {
    this.elem = document.documentElement;
  }

  constructor(
    private userLogin: LoginService,
    private message: ToastrService,
    private router: Router,
    private errorHandler: GlobalErrorHandler) {
  }

  @HostListener('document:keydown.enter', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.login();
  }


  login() {
    if (this.userLoginDto.userName === undefined) {
      this.message.warning('Please enter the User Name', 'Required');
      return;
    }
    if (this.userLoginDto.password === undefined) {
      this.message.warning('Please enter the Password', 'Required');
      return;
    }
    this.userLogin.userLogin(this.userLoginDto).subscribe(obj=> {
      console.log('API Response:', obj);



      // @ts-ignore
      if (obj.userId !== 0) {

        sessionStorage.setItem('token', '1');
        this.router.navigate(['/dashboard-back/']);
      } else {
        this.errorHandler.systemMessages('Sorry ' + this.userLoginDto.userName, 'Invalid Username or Password', 'error', 5000);
        sessionStorage.setItem('token', '0');
        this.router.navigate(['/login']);
      }


      if (obj.userName === this.userLoginDto.userName) {

        this.router.navigate(['/dashboard-back/']);
      } else {
        this.errorHandler.systemMessages('Sorry ' + this.userLoginDto.userName, 'Invalid Username or Password', 'error', 5000);
        this.router.navigate(['/login']);
      }
    }, error => {
      this.errorHandler.systemMessages('Sorry ' + this.userLoginDto.userName, 'Invalid Username or Password', 'error', 5000);
      console.error('API Error:', error);
    });
    this.openFullscreen();
    localStorage.setItem('fullScreen', 'Yes');
  }

  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }

}
