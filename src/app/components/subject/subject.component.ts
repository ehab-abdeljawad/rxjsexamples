import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent  implements OnInit{
  ngOnInit(): void {
    this.subject.subscribe({
      next: (value) => console.log(`Observer 1: ${value}`),
    });
    
    this.subject.subscribe({
      next: (value) => console.log(`Observer 2: ${value}`),
    })

    this.subject.next(1); 
    this.subject.next(2);

    //********************************* */

    this.behaviorSubject.subscribe({
      next: (value) => console.log(`Observer 1: ${value}`),
    });
    
    this.behaviorSubject.next(1); 
    this.behaviorSubject.next(2); 
    
   
    this.behaviorSubject.subscribe({
      next: (value) => console.log(`Observer 2: ${value}`),
    });
    
    this.behaviorSubject.next(3)

    //******************************************************** */

    this.replaySubject.next(1);
    this.replaySubject.next(2);
    this.replaySubject.next(3);


    this.replaySubject.subscribe({
  next: (value) => console.log(`Observer: ${value}`),
});

    this.replaySubject.next(4);


    //********************************************************** */

   
    this.asyncSubject.subscribe({
      next: (value) => console.log(`Observer: ${value}`),
    });
    
    this.asyncSubject.next(1);
    this.asyncSubject.next(2);
   // this.asyncSubject.complete();


  }

  asyncSubject = new AsyncSubject<number>()

  replaySubject = new ReplaySubject<number>(2)
  behaviorSubject = new BehaviorSubject<number>(0);

  subject = new Subject<number>();

  

}
