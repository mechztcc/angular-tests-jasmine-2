import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionDirective } from './action.directive';
import { ActionModule } from './action.module';

describe('ActionDirective', () => {
  let fixture: ComponentFixture<ActionDirectiveTestComponent>;
  let component: ActionDirectiveTestComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionModule],
      declarations: [ActionDirectiveTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActionDirectiveTestComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    const directive = new ActionDirective();
    expect(directive).toBeTruthy();
  });

  it(`(D) (@Output appAction) should emit event with payload when ENTER key is pressed`, () => {
    const div: HTMLElement =
      fixture.nativeElement.querySelector('.dummy-component');

    const event = new KeyboardEvent('keyup', { key: 'Enter' });
    div.dispatchEvent(event);

    expect(component.hasEvent()).toBe(true);
  });
});

@Component({
  template: `<div
    class="dummy-component"
    (appAction)="actionHandler($event)"
  ></div>`,
})
class ActionDirectiveTestComponent {
  private event: Event;

  actionHandler(event: Event): void {
    this.event = event;
  }

  hasEvent(): boolean {
    return !!this.event;
  }
}
