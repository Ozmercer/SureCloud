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
  dogs$: Observable<string>;
  favourites$ = this.dogService.favorites$;

  constructor(private dogService: DogsService) {}

  ngOnInit() {
    this.playDogs();
    this.dogService.loadFavorites();
  }

  pauseDogs() {
    this.dogService.pauseInterval();
  }

  playDogs() {
    this.dogs$ = this.dogService.getDogImages();
  }

  addToFavorites(url: string) {
    this.dogService.addToFavorites(url);
  }
}
