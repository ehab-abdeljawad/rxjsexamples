import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  
  customObservable: Observable<string>;
  observable = of(1, 2, 3); // Observable from static values
  observablef = from([1, 2, 3]); // Observable from an array
  observableiv = interval(2000); // Observable that emits every 2 seconds
  observablee = fromEvent(document, 'click'); // Observable from DOM click events
  subject = new Subject<string>(); // Subject for multicasting

  constructor() {
    // Define the custom Observable
    this.customObservable = new Observable(subscriber => {
      subscriber.next('First value');
      subscriber.next('Second value');
      subscriber.complete();
    });

    // Emit values using the Subject
    this.subject.next('Hello');
    this.subject.next('World');
  }

  ngOnInit(): void {
    // Subscribe to the custom Observable
    this.customObservable.subscribe({
      next: value => console.log(value),
      complete: () => console.log('Custom Observable Complete')
    });

    // Subscribe to the static value Observable
    this.observable.subscribe(value => console.log('Observable of:', value));

    // Subscribe to the array Observable
    this.observablef.subscribe(value => console.log('Observable from:', value));

    // Uncomment to see the interval observable in action (will log every 2 seconds)
    this.observableiv.subscribe(value => console.log('Interval value:', value));

    // Subscribe to the click event Observable
    this.observablee.subscribe(event => console.log('Clicked:', event));

    // Subscribing to the Subject
    this.subject.subscribe(value => console.log('Observer A:', value));
    this.subject.subscribe(value => console.log('Observer B:', value));
    
    // Emit values using the Subject after subscriptions
    this.subject.next('Another Hello');
    this.subject.next('Another World');
  }
}
