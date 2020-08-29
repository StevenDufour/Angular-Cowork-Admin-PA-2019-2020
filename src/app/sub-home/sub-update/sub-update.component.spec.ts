import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubUpdateComponent } from './sub-update.component';

describe('SubUpdateComponent', () => {
  let component: SubUpdateComponent;
  let fixture: ComponentFixture<SubUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
