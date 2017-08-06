import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifExampleComponent } from './ngif-example.component';

describe('NgifExampleComponent', () => {
  let component: NgifExampleComponent;
  let fixture: ComponentFixture<NgifExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgifExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgifExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
