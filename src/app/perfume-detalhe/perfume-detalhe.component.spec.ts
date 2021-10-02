import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumeDetalheComponent } from './perfume-detalhe.component';

describe('PerfumeDetalheComponent', () => {
  let component: PerfumeDetalheComponent;
  let fixture: ComponentFixture<PerfumeDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfumeDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfumeDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
