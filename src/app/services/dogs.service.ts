import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { interval, Subject } from 'rxjs';

interface DogResponse {
  message: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class DogsService {
  private pause = new Subject<void>();
  private dogsStream = this.http.get<DogResponse>(
    'https://dog.ceo/api/breeds/image/random'
  );

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
}
