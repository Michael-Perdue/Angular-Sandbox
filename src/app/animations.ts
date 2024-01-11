import {animate, state, style, transition, trigger} from "@angular/animations";

export const sizes = trigger('sizes', [
  state('small', style({ fontSize: '15vh'})),
  state('big', style({ fontSize: '24vh' })),
  transition('void => *',animate('0ms')),
  transition('* => *', animate('500ms ease-in-out')),
]);

export const buttonSize = trigger('buttonSize', [
  state('small', style({ fontSize: '2vh' })),
  state('big', style({ fontSize: '4vh' })),
  transition('void => *', animate('0ms')),
  transition('* => *', animate('500ms ease-in-out'))
  ]);

export const imgSize = trigger('imgSize', [
  state('small', style({ transform: 'scale(0.8)'})),
  state('big', style({ transform: 'scale(1)' })),
  transition('void => *', animate('0ms')),
  transition('* => *', animate('500ms ease-in-out'))
]);
