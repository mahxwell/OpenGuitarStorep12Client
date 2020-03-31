import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralmsgComponent } from './generalmsg.component';

describe('GeneralmsgComponent', () => {
  let component: GeneralmsgComponent;
  let fixture: ComponentFixture<GeneralmsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralmsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
