import {animate, state, style, transition, trigger} from "@angular/animations";

export const sizes = trigger('sizes', [
  state('small', style({ fontSize: '8vh' })),
  state('big', style({ fontSize: '18vh' })),
  transition('void => *',animate('0ms')),
  transition('* => *', animate('500ms ease-in-out')),
]);
