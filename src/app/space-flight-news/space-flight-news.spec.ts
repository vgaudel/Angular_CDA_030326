import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceFlightNews } from './space-flight-news';

describe('SpaceFlightNews', () => {
  let component: SpaceFlightNews;
  let fixture: ComponentFixture<SpaceFlightNews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaceFlightNews],
    }).compileComponents();

    fixture = TestBed.createComponent(SpaceFlightNews);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
