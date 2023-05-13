import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dog-display',
  templateUrl: './dog-display.component.html',
  styleUrls: ['./dog-display.component.scss'],
})
export class DogDisplayComponent implements OnInit {
  @Input() url: string;
  @Output() start = new EventEmitter<void>();
  @Output() pause = new EventEmitter<void>();
  @Output() like = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
