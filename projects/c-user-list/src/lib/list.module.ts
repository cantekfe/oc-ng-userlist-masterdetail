import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule ,MatIconModule,MatCardModule,MatButtonModule ,MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ],
  declarations: [
    UserListComponent,
    UserDetailsComponent,
    
  ],
  providers: [UserService],
  exports: [UserListComponent]
  })

export class ListModule { }


