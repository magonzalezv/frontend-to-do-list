import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Task } from '../../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    public http: HttpClient
  ) { }


  // Load all the tasks
  loadTasks() {
    const url = 'http://localhost:3000/task';
    return this.http.get( url )
        .pipe(map((resp: any ) => {
          return resp.tasks;
        }));
  }

  // Load a task By ID
    loadTask( id: string) {
      const url = 'http://localhost:3000/task/' + id;
      return this.http.get( url )
        .pipe( map ((resp: any) => resp.task));
    }

  // Create a Task
  createTask( task: Task ) {
    let url = 'http://localhost:3000/task';

    if ( task._id ) {
      // Updating Task
       url += '/' + task._id;
       return this.http.put( url, task )
         .pipe( map (( resp: any ) => {
          swal('Task Updated', task.name, 'success');
          return resp.task;
         }));

    } else {

      // Creating Task
      return this.http.post(url, task)
    .pipe(map((resp: any) => {
      swal('Task created', task.name, 'success');
      
      return resp.task;
    }));
    }
  }

  // Search a task by name
  searchTasks( text: string ) {
    const url = 'http://localhost:3000/search/colection/tasks/' + text;
    return this.http.get( url )
      .pipe(map ( (resp: any) => {
      return resp.tasks;
      }));
  }


  // Update a task by ID
  updateTask( task: Task ) {
    console.log('Ok');
    const url = 'http://localhost:3000/task/' + task._id;
    return this.http.put( url, task )
         .pipe( map (( resp: any ) => {
          swal('Task Updated', task.name, 'success');
          return resp.task;
         }));
  }
}

