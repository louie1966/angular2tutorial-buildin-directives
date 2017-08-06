import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforGroupedExampleComponent } from './ngfor-grouped-example.component';

describe('NgforGroupedExampleComponent', () => {
  let component: NgforGroupedExampleComponent;
  let fixture: ComponentFixture<NgforGroupedExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgforGroupedExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforGroupedExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
