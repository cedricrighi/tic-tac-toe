import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalgameComponent } from './localgame.component';

describe('LocalgameComponent', () => {
  let component: LocalgameComponent;
  let fixture: ComponentFixture<LocalgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalgameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
