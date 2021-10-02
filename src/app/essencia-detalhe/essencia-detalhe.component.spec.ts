import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssenciaDetalheComponent } from './essencia-detalhe.component';

describe('EssenciaDetalheComponent', () => {
  let component: EssenciaDetalheComponent;
  let fixture: ComponentFixture<EssenciaDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EssenciaDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EssenciaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
