import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesComponent {
  @Input() favorites: string[] = [];

  viewDog(url: string) {
    window.open(url, '_blank');
  }
}
