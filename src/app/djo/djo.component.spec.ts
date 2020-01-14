import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DJOComponent } from './djo.component';

describe('DJOComponent', () => {
  let component: DJOComponent;
  let fixture: ComponentFixture<DJOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DJOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DJOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
