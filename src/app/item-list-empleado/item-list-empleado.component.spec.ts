import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListEmpleadoComponent } from './item-list-empleado.component';

describe('ItemListEmpleadoComponent', () => {
  let component: ItemListEmpleadoComponent;
  let fixture: ComponentFixture<ItemListEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemListEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
