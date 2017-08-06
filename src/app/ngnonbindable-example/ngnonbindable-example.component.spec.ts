import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgnonbindableExampleComponent } from './ngnonbindable-example.component';

describe('NgnonbindableExampleComponent', () => {
  let component: NgnonbindableExampleComponent;
  let fixture: ComponentFixture<NgnonbindableExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgnonbindableExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgnonbindableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
