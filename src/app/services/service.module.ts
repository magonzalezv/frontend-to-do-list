import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './service.index';
import { TaskService } from './service.index';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    TaskService
  ],
  declarations: []
})
export class ServiceModule { }
