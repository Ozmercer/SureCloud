import { Component, OnInit } from '@angular/core';
import { DogsService } from './services/dogs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Dog Library';
  dogUrl = '';

  constructor(private dogService: DogsService) {}

  ngOnInit() {
    this.playDogs();
  }

  pauseDogs() {
    this.dogService.pauseInterval();
  }

  playDogs() {
    this.dogService.getDogImages().subscribe((url) => (this.dogUrl = url));
  }
}
