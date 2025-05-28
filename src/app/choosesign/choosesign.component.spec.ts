import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosesignComponent } from './choosesign.component';

describe('ChoosesignComponent', () => {
  let component: ChoosesignComponent;
  let fixture: ComponentFixture<ChoosesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoosesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoosesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
