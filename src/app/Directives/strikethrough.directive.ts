import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  styling(action: string) {
    this.element.nativeElement.style.textDecoration = action;
  }

  @HostListener('click') onClicks() {
    this.styling("line-through");
  }

  @HostListener("dblclick") onDoubleClicks() {
    this.styling("None")
  }

  constructor(private element : ElementRef) { }

}
