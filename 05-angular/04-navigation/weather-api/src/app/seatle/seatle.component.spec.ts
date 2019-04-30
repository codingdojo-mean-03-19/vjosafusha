import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatleComponent } from './seatle.component';

describe('SeatleComponent', () => {
  let component: SeatleComponent;
  let fixture: ComponentFixture<SeatleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
