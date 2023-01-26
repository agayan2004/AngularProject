import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective {

  constructor(public el:ElementRef) {
    console.log(el);
    
   }

   @HostListener('click') test() {// vor tegi vrao selectory avelacrace avelanmenq click event u kanchvme es functian

   }

}
