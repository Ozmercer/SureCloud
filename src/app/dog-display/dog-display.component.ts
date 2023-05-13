import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-dog-display',
  templateUrl: './dog-display.component.html',
  styleUrls: ['./dog-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DogDisplayComponent implements OnChanges {
  @Input() url: string;
  @Output() start = new EventEmitter<void>();
  @Output() pause = new EventEmitter<void>();
  @Output() like = new EventEmitter<string>();

  now: Date;

  ngOnChanges() {
    this.now = new Date();
  }
}
