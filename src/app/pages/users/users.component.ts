import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  // Counter for pagination
  since = 0;
  
  // Total of users in database
  totalUSers = 0;

  // Loading
  loading: boolean = true;

  constructor(
    public _userService: UserService
  ) { }

  ngOnInit() {
    this.loadUsers();
  }

  // Load all users
  loadUsers() {
    this.loading = true;
    this._userService.loadUsers( this.since )
        .subscribe( (resp: any) => {
         // console.log ( resp );
          this.totalUSers = resp.total;
          this.users = resp.users;
          this.loading = false;
        } );
  }

  // Change by 5 the pagination of users
  changeSince( value: number ) {
    let since = this.since + value;
    if ( since < 0 ) {
     return console.log ('El numero es menor que 0');
    } else {
      if ( since >= this.totalUSers  ) {
        return console.log ('El numero es mayor que el numero total');
      } else {
        this.since =  since;
        console.log(this.since);
        this.loadUsers();
      }
    }
}

// Search an user by name or email
searchUser( text: string ) {

  if ( text.length <= 0 ) {
    this.loadUsers();
    return;
  }

  this.loading = true;

  this._userService.searchUsers( text )
    .subscribe( (users: User[]) => {
      this.users = users;
      this.loading = false;
    });
}

}
