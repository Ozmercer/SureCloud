import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DogsService } from './services/dogs.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dog-display',
  template: '',
})
class MockDogDisplay {
  @Input() url: string;
}

@Component({
  selector: 'app-favorites',
  template: '',
})
class MockFavorites {
  @Input() favorites: string[];
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let service: DogsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, MockDogDisplay, MockFavorites],
      providers: [
        {
          provide: DogsService,
          useValue: jasmine.createSpyObj([
            'getDogImages',
            'loadFavorites',
            'pauseInterval',
            'addToFavorites',
          ]),
        },
      ],
    }).compileComponents();

    service = TestBed.inject(DogsService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Dog Library'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Dog Library');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Dog Library');
  });

  it('should get doggy stream and saved items on init', () => {
    expect(service.getDogImages).toHaveBeenCalled();
    expect(service.loadFavorites).toHaveBeenCalled();
  });

  it('should pause doggy stream', () => {
    component.pauseDogs();

    expect(service.pauseInterval).toHaveBeenCalled();
  });

  it('should add to favorites', () => {
    component.addToFavorites('url');

    expect(service.addToFavorites).toHaveBeenCalledWith('url');
  });
});
