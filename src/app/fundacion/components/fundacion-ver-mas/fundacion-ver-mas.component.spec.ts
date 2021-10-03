import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundacionVerMasComponent } from './fundacion-ver-mas.component';

describe('FundacionVerMasComponent', () => {
  let component: FundacionVerMasComponent;
  let fixture: ComponentFixture<FundacionVerMasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundacionVerMasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundacionVerMasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
