import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { interval, Subject } from 'rxjs';

interface DogResponse {
  message: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class DogsService {
  pause = new Subject<void>();

  constructor(private http: HttpClient) {}

  getDogImages() {
    return interval(3000).pipe(
      takeUntil(this.pause),
      switchMap(() =>
        this.http.get<DogResponse>('https://dog.ceo/api/breeds/image/random')
      ),
      map((response: DogResponse) => response.message)
    );
  }

  pauseInterval() {
    this.pause.next();
  }
}
