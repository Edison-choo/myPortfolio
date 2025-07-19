import { Component } from '@angular/core';
import { 
  trigger,
  transition,
  query,
  stagger,
  animate,
  keyframes,
  style, 
} from '@angular/animations';

const loadTransition = transition('* => *', [
  query(':enter', style({opacity: 0}), {optional: true}),
  query(':enter', stagger('300ms', [
    animate('1s ease-in', keyframes([
      style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
      style({opacity: 0.5, transform: 'translateY(35px)', offset: 0.3}),
      style({opacity: 1, transform: 'translateY(0)', offset: 1}),
    ]))
  ]))
]);

const loadTransition2 = transition('* => *', [
  query(':enter', style({opacity: 0}), {optional: true}),
  query(':enter', stagger('60ms', [
    animate('1s ease-in', keyframes([
      style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
      style({opacity: 0.5, transform: 'translateY(35px)', offset: 0.3}),
      style({opacity: 1, transform: 'translateY(0)', offset: 1}),
    ]))
  ]))
]);

const staggerAnim = transition('* => *', [ 
  query(':enter', [
      style({ opacity: 0 }),
      stagger(1000, [animate('0.5s', style({ opacity: 1 }))])
    ], { optional: true }
  )
]);

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  animations: [
  trigger('stagger', [loadTransition]),
  trigger('stagger2', [loadTransition2])],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = "I'M EDISON CHOO ".split('');
  desp = 'I am a programmer that specialzed in cloud computing & web development'.split('');
}
