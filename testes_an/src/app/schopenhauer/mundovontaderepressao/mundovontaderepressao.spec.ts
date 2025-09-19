import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mundovontaderepressao } from './mundovontaderepressao';

describe('Mundovontaderepressao', () => {
  let component: Mundovontaderepressao;
  let fixture: ComponentFixture<Mundovontaderepressao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mundovontaderepressao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mundovontaderepressao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
