import { DUMMY_USERS } from '../dummy-users';
import { Component } from '@angular/core';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
   selectedUser = DUMMY_USERS[randomIndex]
}
