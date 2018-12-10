import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/service.index';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styles: []
})
export class TasksComponent implements OnInit {

  tasks = [];

  constructor(
    public _taskService: TaskService
  ) { }

  ngOnInit() {
    this.loadTasks();
  }

  // Change the status of task to Progress
  changeStatusProgress( id: string ) {
    for ( let i = 0; i < this.tasks.length; i++ ) {
        if ( this.tasks[i]._id === id ) {
          this.tasks[i].status = 'In-Progress';
          this.tasks[i].userID =  this.tasks[i].user._id;
         this._taskService.createTask( this.tasks[i] )
            .subscribe( task => {
              console.log(task);
            } );
        }
    }
  }

  // Change the status of task to Completed
  changeStatusCompleted( id: string ) {
    for ( let i = 0; i < this.tasks.length; i++ ) {
        if ( this.tasks[i]._id === id ) {
          this.tasks[i].status = 'Completed';
          this.tasks[i].userID =  this.tasks[i].user._id;
         this._taskService.createTask( this.tasks[i] )
            .subscribe( task => {
              console.log(task);
            } );
        }
    }
  }

  // Change the status of task to Completed
  changeStatusArchived( id: string ) {
    for ( let i = 0; i < this.tasks.length; i++ ) {
        if ( this.tasks[i]._id === id ) {
          this.tasks[i].status = 'Archived';
          this.tasks[i].userID =  this.tasks[i].user._id;
         this._taskService.createTask( this.tasks[i] )
            .subscribe( task => {
              console.log(task);
            } );
        }
    }
  }

  // Change the status of task to Open
  changeStatusOpen( id: string ) {
    for ( let i = 0; i < this.tasks.length; i++ ) {
        if ( this.tasks[i]._id === id ) {
          this.tasks[i].status = 'Open';
          this.tasks[i].userID =  this.tasks[i].user._id;
         this._taskService.createTask( this.tasks[i] )
            .subscribe( task => {
              console.log(task);
            } );
        }
    }
  }

  // Load all the tasks
  loadTasks() {
    this._taskService.loadTasks()
        .subscribe( tasks => {
          this.tasks = tasks;
          console.log(this.tasks);
        });
  }

  // Search a task by name or description
  searchTask( text: string ) {

    if ( text.length <= 0 ) {
      this.loadTasks();
      return;
    }

    this._taskService.searchTasks( text )
        .subscribe ( tasks => this.tasks = tasks );
  }

}
