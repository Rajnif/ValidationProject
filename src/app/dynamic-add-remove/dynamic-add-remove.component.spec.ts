import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicAddRemoveComponent } from './dynamic-add-remove.component';

describe('DynamicAddRemoveComponent', () => {
  let component: DynamicAddRemoveComponent;
  let fixture: ComponentFixture<DynamicAddRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicAddRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicAddRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
