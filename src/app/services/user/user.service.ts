import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// sweet alert
import swal from 'sweetalert';
@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(
    public http: HttpClient
  ) {
  }

  // Register an User
  registerUser( user: User ) {
    const url = 'http://localhost:3000/user';

    return this.http.post(url, user)
    .pipe(map((resp: any) => {
      swal('User Registered', user.email, 'success');
      console.log(resp);
      return resp.user;
    }));
  }

  // Load all the users
  loadUsers( since: number = 0 ) {
    const url = 'http://localhost:3000/user?since=' + since;
    return this.http.get( url );
  }


  // Search Users by name or email
  searchUsers( text: string ) {
    let url = 'http://localhost:3000/search/colection/users/' + text;
    return this.http.get( url )
      .pipe(map ( (resp: any) => resp.users ));
  }

}

