import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDirectivasComponent } from './test-directivas.component';

describe('TestDirectivasComponent', () => {
  let component: TestDirectivasComponent;
  let fixture: ComponentFixture<TestDirectivasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDirectivasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDirectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
