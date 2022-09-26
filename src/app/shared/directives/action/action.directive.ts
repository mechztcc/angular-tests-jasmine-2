import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appAction]',
})
export class ActionDirective {
  @Output() appAction: EventEmitter<Event> = new EventEmitter();

  constructor() {}

  @HostListener('click', ['$event'])
  handleClick(event: Event): void {
    this.appAction.emit(event);
  }

  @HostListener('keyup', ['$event'])
  handleKeyUp(event: Event): void {
    this.appAction.emit(event);
  }
}
