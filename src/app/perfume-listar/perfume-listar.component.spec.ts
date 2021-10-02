import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumeListarComponent } from './perfume-listar.component';

describe('PerfumeListarComponent', () => {
  let component: PerfumeListarComponent;
  let fixture: ComponentFixture<PerfumeListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfumeListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfumeListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
