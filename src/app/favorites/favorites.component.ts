import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  @Input() favorites: string[] = [];

  viewDog(url: string) {
    window.open(url, '_blank');
  }
}
