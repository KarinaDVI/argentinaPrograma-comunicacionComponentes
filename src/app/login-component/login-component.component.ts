import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  email='';
  password='';

  constructor(public authService: AuthService) { }

  Login(){
    this.authService.login(this.email, this.password)
  }
  ngOnInit(): void {
  }

}
