import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePlayerCreateComponent } from './game-player-create.component';

describe('GamePlayerCreateComponent', () => {
  let component: GamePlayerCreateComponent;
  let fixture: ComponentFixture<GamePlayerCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamePlayerCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePlayerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
