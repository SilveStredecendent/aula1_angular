import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zarastustra } from './zarastustra';

describe('Zarastustra', () => {
  let component: Zarastustra;
  let fixture: ComponentFixture<Zarastustra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Zarastustra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zarastustra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
