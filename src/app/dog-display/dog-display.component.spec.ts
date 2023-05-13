import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { DogDisplayComponent } from './dog-display.component';

describe('DogDisplayComponent', () => {
  let component: DogDisplayComponent;
  let fixture: ComponentFixture<DogDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DogDisplayComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit a start event', fakeAsync(() => {
    spyOn(component.start, 'emit');

    let startButton =
      fixture.debugElement.nativeElement.querySelector('.green');
    startButton.click();
    tick();

    expect(component.start.emit).toHaveBeenCalled();
  }));

  it('should emit a pause event', fakeAsync(() => {
    spyOn(component.pause, 'emit');

    let startButton = fixture.debugElement.nativeElement.querySelector('.red');
    startButton.click();
    tick();

    expect(component.pause.emit).toHaveBeenCalled();
  }));

  it('should emit a like event', fakeAsync(() => {
    component.url = 'url';
    spyOn(component.like, 'emit');

    let startButton =
      fixture.debugElement.nativeElement.querySelector('.yellow');
    startButton.click();
    tick();

    expect(component.like.emit).toHaveBeenCalledWith('url');
  }));

  it('should update "now" on changes', () => {
    component.now = new Date(0);

    component.ngOnChanges();

    expect(component.now).toEqual(new Date());
  });
});
