import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanHoseComponent } from './san-hose.component';

describe('SanHoseComponent', () => {
  let component: SanHoseComponent;
  let fixture: ComponentFixture<SanHoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanHoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanHoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
