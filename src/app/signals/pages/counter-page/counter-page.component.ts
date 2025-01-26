import { Component, computed, signal } from '@angular/core';

@Component({
  standalone: false,  
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {


  public counter = signal(10);
  public squaredCounter = computed(() => this.counter() ** 2);


  increaseBy(value: number) {
    this.counter.update((current) => current + value);
  }
}
