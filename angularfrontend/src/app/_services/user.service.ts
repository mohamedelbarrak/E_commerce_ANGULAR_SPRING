import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  PATH_OF_API = 'http://localhost:8081';

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });//marcher sans kay
  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService
  ) {}

  public login(loginData: any) {
    return this.httpclient.post(this.PATH_OF_API + '/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }

 
  public register(loginData: any) {
    return this.httpclient.post(this.PATH_OF_API + '/registerNewUser', loginData, {
      headers: this.requestHeader,
    });
  }

  // craete(category: FormData): Observable<any> {
  //   return this.http.post<Category>(`${this.createUrl}` , category);
  // }

  public forUser() {
    return this.httpclient.get(this.PATH_OF_API + '/forUser', {
      responseType: 'text',
    });
  }


  public forAdmin() {
    return this.httpclient.get(this.PATH_OF_API + '/forAdmin', {
      responseType: 'text',
    });
  }

  public roleMatch(allowedRoles: any): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
    return isMatch;
  }

  getUserByToken () {
    // return this.http.get<User>(`${environment.API_URL}/user`, {
    //     headers: new HttpHeaders({
    //       'Authorization': 'Bearer ' + localStorage.getItem('token'),
    //       'Content-Type': 'application/json'
    //     })
    // });

    return this.httpclient.get(this.PATH_OF_API + '/user', {
      headers: new HttpHeaders({
               'Authorization': 'Bearer ' + localStorage.getItem('token'),
               'Content-Type': 'application/json'
    })
  });
}
}
