import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { LikeWidgetModule } from '../like-widget/like-widget.module';

import { PhotoFrameComponent } from './photo-frame.component';

describe('PhotoFrameComponent', () => {
  let component: PhotoFrameComponent;
  let fixture: ComponentFixture<PhotoFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoFrameComponent],
      imports: [LikeWidgetModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${PhotoFrameComponent.prototype.like.name} should trigger (@Output liked) onde when called multiple times within debounce time`, fakeAsync(() => {
    let times = 0;

    component.liked.subscribe(() => times++);
    component.like();
    component.like();

    tick(500);

    expect(times).toBe(1);
  }));

  it(`#${PhotoFrameComponent.prototype.like.name} should trigger (@Output liked) two times when called outside debounce time`, fakeAsync(() => {
    let times = 0;

    component.liked.subscribe(() => times++);
    component.like();
    tick(500);
    component.like();
    tick(500);

    expect(times).toBe(2);
  }));

  it(`(D) should display number of likes when (@Input likes) is incremented`, () => {
    component.likes++;
    fixture.detectChanges();
    const element: HTMLElement =
      fixture.nativeElement.querySelector('.like-counter');

    expect(element.textContent.trim()).toBe('1');
  });

  it('(D) should update aria-label when (@Input likes) is incremented', () => {
    component.likes++;
    fixture.detectChanges();

    const element: HTMLElement =
      fixture.nativeElement.querySelector('.like-counter');

    expect(element.getAttribute('aria-label')).toBe('1: people liked');
  });

  it('(D) should display number of likes when clicked', (done) => {
    component.liked.subscribe(() => {
      component.likes++;
      fixture.detectChanges();

      const counteElement: HTMLElement =
        fixture.nativeElement.querySelector('.like-counter');
      expect(counteElement.textContent.trim()).toBe('1');
      done();
    });

    const likeWidgetContainerEl: HTMLElement =
      fixture.nativeElement.querySelector('.like-widget-container');

    likeWidgetContainerEl.click();
  });
});
