import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { PagesComponent } from './pages/pages.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { UsersComponent } from './pages/users/users.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TasksComponent } from './pages/tasks/tasks.component';
import { CreateTaskComponent } from './pages/create-task/create-task.component';



// Services
import { ServiceModule } from './services/service.module';





@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    HeaderComponent,
    SidebarComponent,
    PagesComponent,
    NopagefoundComponent,
    CreateUserComponent,
    UsersComponent,
    CreateTaskComponent,
    TasksComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
