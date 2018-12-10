import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import swal from 'sweetalert';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styles: []
})
export class CreateUserComponent implements OnInit {

  // Contain all the data of the form
  shape: FormGroup;

  constructor(
    public _userService: UserService,
    public router: Router
  ) { }

  // Compare if the passwords are equals
  areEquals( value1: string, value2: string  ) {
    return ( group: FormGroup ) => {
      const pass1 = group.controls[value1].value;
      const pass2 = group.controls[value2].value;

      if ( pass1 === pass2 ) {
        return null;
      }
      return {
        areEquals: true
      };
    };
  }

  ngOnInit() {
    this.shape = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password1: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required)
    }, { validators: this.areEquals('password1', 'password2') });
  }

  // Create a new user
  registerUser() {
    if ( this.shape.invalid ) {
      return;
    }

    const user = new User(
      this.shape.value.name,
      this.shape.value.email,
      this.shape.value.password1
    );

    this._userService.registerUser( user )
        .subscribe ( resp =>  this.shape.reset());


  }

}
