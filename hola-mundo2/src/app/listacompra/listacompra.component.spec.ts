import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacompraComponent } from './listacompra.component';

describe('ListacompraComponent', () => {
  let component: ListacompraComponent;
  let fixture: ComponentFixture<ListacompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListacompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
