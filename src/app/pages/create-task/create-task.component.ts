import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.model';
import { TaskService } from '../../services/service.index';
import { UserService } from '../../services/service.index';
import { Task } from '../../models/task.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styles: []
})
export class CreateTaskComponent implements OnInit {

  // Create an user type User
  users: User[] = [];

  // Create a task type Task
  task: Task = new Task('', '', '', '', '');


  constructor(
    public _taskService: TaskService,
    public _userService: UserService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe( params => {

      // Obtain id of the request
      const id = params['id'];

      // Evaluate if creating a new task 
      if ( id !== 'new' ) {
          this.loadTask( id );
      }
    });
  }

  ngOnInit() {

        // Load all users in database
        this._userService.loadUsers()
        .subscribe( (resp: any) => {
          this.users = resp.users;
        } );

  }

  // Load a task by ID
  loadTask( id: string ) {
      this._taskService.loadTask( id )
        .subscribe( task => {
          this.task = task;
          console.log( task );
          this.task.userID = task.user._id;
        });
  }

  // Create a task
  createTask( shape: NgForm ) {
    console.log( shape.valid );
    // console.log( shape.value );

    if ( shape.invalid ) {
      return;
    }

    this._taskService.createTask( this.task )
      .subscribe( task => {
        this.task._id = task._id;
        this.router.navigate(['tasks']);
      } );

  }

}
