import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { find, first, filter, map } from 'rxjs/operators';
import { User } from '../models/user';

const users=[
  {
    "id": 1,
    "name": "Su",
    "surname": "Çelik",
    "details": [
      {
        "id": "1",
        "alarm": "Sms",
        "company": "Can Group",
        "phonenumber": "0567 533 20 53",
        "mail": "asda@gmail.com"
      }
    ]
  },
  {
    "id": 2,
    "name": "Can",
    "surname": "Şans",
    "details": [
      {
        "id": "1",
        "alarm": "Sms-mail",
        "company": "Çöl Group",
        "phonenumber": "0567 533 20 53",
        "mail": "asda@gmail.com"
      }
    ]
  },
  {
    "id": 3,
    "name": "Bulut",
    "surname": "Son",
    "details": [
      {
        "id": "1",
        "alarm": "Sms-mail",
        "company": "Janti Group",
        "phonenumber": "0567 533 20 53",
        "mail": "asda@gmail.com"
      }
    ]
  }
  
]

@Injectable()

export class UserService {

  constructor(private http: HttpClient) { }


  getUser(id: number): Observable<User[]> {
    console.log("gelen id:", id)
    return this.temp_getUser(id);
  }


  temp_getUser(id: number):Observable<any> {
    return of(users);
  }

  getUsers(): Observable<any> {
    return of(users);
  }

}

