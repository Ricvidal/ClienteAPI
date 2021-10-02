import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssenciaListarComponent } from './essencia-listar.component';

describe('EssenciaListarComponent', () => {
  let component: EssenciaListarComponent;
  let fixture: ComponentFixture<EssenciaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EssenciaListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EssenciaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
