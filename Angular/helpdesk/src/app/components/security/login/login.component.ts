import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/model/user.model';
import { SharedService } from 'src/app/services/shared.service';
import { UserService } from 'src/app/services/user.service';
import { CurrentUser } from 'src/app/model/current-user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User('','','','');
  shared: SharedService;
  message: string;

  constructor(
    private UserService: UserService,
    private router: Router
  ) {
    this.shared = SharedService.getInstance();
   }

  ngOnInit() {
  }

  login(){
    this.message = '';
    this.UserService.login(this.user).subscribe((userAuthentication: CurrentUser)=>{
      this.shared.token = userAuthentication.token;
      this.shared.user = userAuthentication.user;
      this.shared.user.profile = this.shared.user.profile.substring(5);
      this.shared.showTemplate.emit(true);
      this.router.navigate(['/']);
    }, err => {
      this.shared.token = null;
      this.shared.user = null;
      this.shared.showTemplate.emit(false);
      this.message = 'Error';
    });
  }

  cancelLogin(){
    this.message = '';
    this.user = new User('','','','');
    window.location.href = '/login';
    window.location.reload();
  }

  getFromGroupClass(isInvalid:boolean, isDirty):{}{
    return{
      'form-group' : true,
      'has-error' : isInvalid && isDirty,
      'has-success' : !isInvalid && isDirty
    }
  }

}
