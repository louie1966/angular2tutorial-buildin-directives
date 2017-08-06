import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswitchExampleComponent } from './ngswitch-example.component';

describe('NgswitchExampleComponent', () => {
  let component: NgswitchExampleComponent;
  let fixture: ComponentFixture<NgswitchExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgswitchExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgswitchExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
