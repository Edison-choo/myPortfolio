import { Component, Input, Output } from '@angular/core';
import { 
  trigger,
  transition,
  query,
  stagger,
  animate,
  keyframes,
  style, 
} from '@angular/animations';

const  slideRight = transition(':enter', [
  style({ marginLeft: '-50%' }),
  animate('500ms', style({ marginLeft: '0px' })),
]);
const slideLeft = transition(':enter', [
  style({ marginRight: '-50%' }),
  animate('500ms', style({ marginRight: '0px' })),
]);
const slideOut  =transition(':leave', [
  animate('200ms', style({ marginLeft: '-100%' })),
]);

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  animations: [
  trigger('slideLeft', [slideLeft]),
  trigger('slideRight', [slideRight],
  )
],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  
}


