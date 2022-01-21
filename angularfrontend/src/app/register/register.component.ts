import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { UserRegisterService } from '../_services/user-register.service';
import { NgForm } from '@angular/forms';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private userService: UserService,//userService c'est sercive dans _services pour http://localhost:9090/...
    private userRegisterService: UserRegisterService,//userAuthService c'est sercive dans _services pour enregistrer role et token dans localStorage
    private router: Router,//redirection
    private userAuthService: UserAuthService
  ) { }

  ngOnInit(): void {
  }

  register(registerForm: NgForm) {
    this.userService.register(registerForm.value).subscribe(
      // response c'est la response du spring
      (response: any) => {
        //this.userRegisterService.setRoles(response.role.roleName);
        //this.userRegisterService.setToken(response.jwtToken);

        //this.userRegisterService.setuser_first_name(response.user.user_first_name);
        //this.userRegisterService.setuser_last_name(response.user.user_last_name);
        // redirection 
        //const role = response.user.role[0].roleName;
        //if (role === 'Admin') {
        //  this.router.navigate(['/admin']);
        //} else {
        console.log(registerForm.value);
        console.log(registerForm.value.userFirstName);

        const testForm2 = <NgForm>{
          value: {
            userName: registerForm.value.userName,
            userPassword: registerForm.value.userPassword
          }
        };
        console.log("testForm2.value");
        console.log(testForm2.value);
        this.userService.login(testForm2.value).subscribe(
          // response c'est la response du spring
          (response: any) => {
            this.userAuthService.setRoles(response.user.role);
            this.userAuthService.setToken(response.jwtToken);
    
            // redirection 
            const role = response.user.role[0].roleName;
            if (role === 'Admin') {
              this.router.navigate(['/admin']);
            } else {
              this.router.navigate(['/user']);
            }
          },
          (error) => {
            console.log(error);
          }
        );

        //this.userService.login(testForm2);
        //this.router.navigate(['/login']);
        //}
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

