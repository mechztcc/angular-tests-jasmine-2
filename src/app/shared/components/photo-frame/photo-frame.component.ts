import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-photo-frame',
  templateUrl: './photo-frame.component.html',
  styleUrls: ['./photo-frame.component.scss'],
})
export class PhotoFrameComponent implements OnInit {
  @Output() liked: EventEmitter<void> = new EventEmitter();

  @Input() src: string = '';
  @Input() description: string = '';
  @Input() likes = 0;

  constructor() {}

  ngOnInit(): void {}

  like() {
    this.liked.emit();
  }
}
