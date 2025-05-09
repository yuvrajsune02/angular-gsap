import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  constructor() {}
  private _count = signal(0);
  count = computed(() => this._count()); // expose as read-only

  increment() {
    this._count.update((n) => n + 1);
  }

  setCount(val: number) {
    this._count.set(val);
  }
}
