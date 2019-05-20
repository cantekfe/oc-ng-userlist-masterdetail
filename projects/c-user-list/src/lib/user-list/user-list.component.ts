import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
import { trigger, style, transition, animate, state } from '@angular/animations';
import { ToolboxComponent } from '../toolbox-decorator';

type PaneType = 'left' | 'right';
 @ToolboxComponent({
   desc: 'User List',
   icon: 'fa fa-chart-bar',
   componentName : 'UserListComponent'
 })
@Component({
  selector: 'pack-user-list-container',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  animations: [
     trigger('slide', [
      state('left', style({ transform: 'translateX(0)' })),
      state('right', style({ transform: 'translateX(-50%)' })),
      transition('* => *', animate(300))
    ])
  ]
})
export class UserListComponent {
  isUserSelected = false;
  users = [];
  selectedUser: any;
  backtothelist = true;
  @Input() activePane: PaneType = 'left';
  constructor(private _userService: UserService) {}
  slideViews(){  
    console.log("this.activePane: ",this.activePane)
    this.activePane = this.activePane === 'left' ? 'right' : 'left';
  }
  onSelection(element: any) {
       this.slideViews();
    this.isUserSelected = true
    this.selectedUser = element;
    console.log(this.selectedUser);
  }
  ngOnInit() {
    this._userService.getUsers()
      .subscribe(result => {
        this.users = result;
      });
  }
  onReturnToList(count) {
     this.slideViews();
    console.log(count);
    this.isUserSelected = false;
  }
}