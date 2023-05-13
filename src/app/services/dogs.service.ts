import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { BehaviorSubject, interval, Subject } from 'rxjs';

interface DogResponse {
  message: string;
  status: string;
}

const storageKey = 'favorites';

@Injectable({
  providedIn: 'root',
})
export class DogsService {
  private pause = new Subject<void>();
  private dogsStream = this.http.get<DogResponse>(
    'https://dog.ceo/api/breeds/image/random'
  );
  favorites$ = new BehaviorSubject<string[]>([]);

  constructor(private http: HttpClient) {}

  getDogImages() {
    // prevents multiple intervals running at once
    this.pause.next();

    return interval(3000).pipe(
      startWith(this.dogsStream),
      switchMap(() => this.dogsStream),
      map((response: DogResponse) => response.message),
      takeUntil(this.pause)
    );
  }

  pauseInterval() {
    this.pause.next();
  }

  addToFavorites(url: string) {
    const saved = this.loadFavorites();
    const updatedList = [...saved, url];

    localStorage.setItem(storageKey, JSON.stringify(updatedList));
    this.favorites$.next(updatedList);
  }

  loadFavorites(): string[] {
    const favorites = JSON.parse(localStorage.getItem(storageKey) ?? '[]');
    this.favorites$.next(favorites);

    return favorites;
  }
}
