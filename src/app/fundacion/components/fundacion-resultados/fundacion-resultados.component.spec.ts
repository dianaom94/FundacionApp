import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundacionResultadosComponent } from './fundacion-resultados.component';

describe('FundacionResultadosComponent', () => {
  let component: FundacionResultadosComponent;
  let fixture: ComponentFixture<FundacionResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundacionResultadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundacionResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
