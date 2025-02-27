import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {DOCUMENT} from "@angular/common";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  time: any;
  CurrentTime: any;

  isFullScreen!: string;
  elem: any;

  constructor(private message: ToastrService,
              private router: Router,
              private loginService: LoginService,
              private el: ElementRef,
              private renderer: Renderer2,
              @Inject(DOCUMENT) private document: any
  ) {
    this.elem = el.nativeElement;
  }

  ngOnInit() {
    this.time = Date.now();
    this.elem = document.documentElement;
    setInterval(() => {
      this.CurrentTime = new Date().getHours() + ':' + (new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes() + ':' + (new Date().getSeconds() < 10 ? '0' : '') + new Date().getSeconds();
    }, 1);
    // @ts-ignore
    this.isFullScreen = localStorage.getItem('fullScreen');
  }


  logOut() {
    this.router.navigate(['/login']);
  }

  openFullscreen() {
    localStorage.setItem('fullScreen', 'Yes');
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
    // @ts-ignore
    this.isFullScreen = localStorage.getItem('fullScreen');
  }

  closeFullscreen() {
    localStorage.setItem('fullScreen', 'No');
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
    // @ts-ignore
    this.isFullScreen = localStorage.getItem('fullScreen');
  }



  toggleFullscreen() {
    const isFullScreen = localStorage.getItem('fullScreen') === 'Yes';
    if (isFullScreen) {
      this.closeFullscreen();
    } else {
      this.openFullscreen();
    }
  }


}
