import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { DogDisplayComponent } from './dog-display/dog-display.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent,
    DogDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
