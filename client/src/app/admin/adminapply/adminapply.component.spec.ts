import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminapplyComponent } from './adminapply.component';

describe('AdminapplyComponent', () => {
  let component: AdminapplyComponent;
  let fixture: ComponentFixture<AdminapplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminapplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
