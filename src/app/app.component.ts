import { Component, OnInit } from '@angular/core';
import { DogsService } from './services/dogs.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Dog Library';
  dogs$: Observable<string> | undefined;

  constructor(private dogService: DogsService) {}

  ngOnInit() {
    this.playDogs();
  }

  pauseDogs() {
    this.dogService.pauseInterval();
  }

  playDogs() {
    this.dogs$ = this.dogService.getDogImages();
  }
}
