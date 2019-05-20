import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  user: User
  isUserSelected = false;
  //animation
  display_loading = 'block';
  display_view = 'none';

  @Output() returnToList = new EventEmitter();
  returnBackToList() {
       //animation
    this.display_view = 'none';
    this.returnToList.emit(null);
  }

  constructor(private _userService: UserService) { }
  private _userId = 0;
  get userId(): number { return this._userId; }
  @Input('userId')
  set userId(value: number) {
     //animation
    this.display_loading = 'block';
    this.display_view = 'none';

    this._userId = +value;
    this._userService.getUser(this.userId)
      .subscribe((c: User[]) => {
        this.isUserSelected = true;
         //animation
        this.display_loading = 'none';
        this.display_view = 'block';

        this.user = c.find(a => a.id == this._userId);
      })
  }
}

