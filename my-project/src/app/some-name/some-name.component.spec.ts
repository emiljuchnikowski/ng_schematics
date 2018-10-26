import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeNameComponent } from './some-name.component';

describe('SomeNameComponent', () => {
  let component: SomeNameComponent;
  let fixture: ComponentFixture<SomeNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
