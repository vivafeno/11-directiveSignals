import { Component, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  standalone: false,
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css',
})
export class PropertiesPageComponent {
  public user = signal<User>({
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
  });

  public counter = signal(0);
  public fullname = computed<string>(  () => `${this.user().first_name} ${this.user().last_name} - ${this.counter()}`);

  public userChangedEffect = effect( () => {
    console.log(`${this.user().first_name} - ${this.counter()}`);
  });


  onFieldUpdated(field: keyof User, value: string) {    
    this.user.set(
      {...this.user(),
      [field]: value} );
  }
   

  increaseBy(value: number) {
    this.counter.update((current) => current + value);
  }
}
