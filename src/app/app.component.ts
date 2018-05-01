import { Component, OnDestroy } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store'; // <- Changed
import { CounterActions } from './app.actions'; // <- New
import { IAppState} from "../store"; // <- New
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @select() readonly count$: Observable<number>; // <- Changed
  @select() readonly text$: Observable<String>; // <- Changed


  constructor(
    private actions: CounterActions,
    private ngRedux: NgRedux<IAppState>) {} // <- ChangedZ
    
    /*
    private actions: CounterActions) {
      this.subscription = ngRedux.select<number>('count') // <- New
        .subscribe(newCount => this.count = newCount);    // <- New
    }
    */
   /*
    private actions: CounterActions) {
      this.count$ = ngRedux.select<number>('count'); // <- New
    }
    */
  increment() {
    this.ngRedux.dispatch(this.actions.increment()); // <- New
  }

  decrement() {
    this.ngRedux.dispatch(this.actions.decrement()); // <- New
  }
  save(hellotext: string) {
    console.log(hellotext);
    this.ngRedux.dispatch(this.actions.save(hellotext)); // <- New
  }
  /*
  ngOnDestroy() {                    // <- New
    this.subscription.unsubscribe(); // <- New
  }
  */
}
