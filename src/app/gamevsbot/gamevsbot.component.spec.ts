import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamevsbotComponent } from './gamevsbot.component';

describe('GamevsbotComponent', () => {
  let component: GamevsbotComponent;
  let fixture: ComponentFixture<GamevsbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamevsbotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamevsbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
