import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule ,MatIconModule,MatCardModule,MatButtonModule ,MatInputModule } from '@angular/material';
import{ListModule} from '../../projects/c-user-list/src/lib/list.module'
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
    MatInputModule,
    ListModule
  ],
  declarations: [
    AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
