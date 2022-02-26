import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaComponentesComponent } from './actualiza-componentes.component';

describe('ActualizaComponentesComponent', () => {
  let component: ActualizaComponentesComponent;
  let fixture: ComponentFixture<ActualizaComponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizaComponentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizaComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
