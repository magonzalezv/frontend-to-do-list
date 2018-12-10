import { RouterModule, Routes } from '@angular/router';

import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { UsersComponent } from './pages/users/users.component';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import { TasksComponent } from './pages/tasks/tasks.component';



const appRoutes: Routes = [
    { path: 'tasks', component: TasksComponent },
    { path: 'create-user', component: CreateUserComponent },
    { path: 'create-task/:id', component: CreateTaskComponent },
    { path: 'users', component: UsersComponent },
    { path: 'tasks', component: TasksComponent },
    { path: '', redirectTo: '/tasks', pathMatch: 'full' },
    { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
