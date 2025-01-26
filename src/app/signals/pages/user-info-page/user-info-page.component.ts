import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  standalone: false,

  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css',
})
export class UserInfoPageComponent implements OnInit {
  private usersService = inject(UserServiceService);

  // Signals
  public userId = signal(1);
  public currentUser = signal<User | undefined>(undefined);
  public userWasFound = signal(false);

  public userFullName = computed<string | undefined>(() => {
    if (!this.currentUser()) return 'Usuario no encontrado...';
    return `${this.currentUser()!.first_name} ${this.currentUser()!.last_name}`;
  });

  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  loadUser(id: number) {
    if (id <= 0) return;
    this.userId.set(id);
    this.currentUser.set(undefined);

    this.usersService.getUserById(id).subscribe({
      next: (user) => {
        this.currentUser.set(user);
        this.userWasFound.set(true);
      },
   error: () => {
      this.userWasFound.set(false);
      this.currentUser.set(undefined);
     }
    });
  };
}
