import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincareersComponent } from './admincareers.component';

describe('AdmincareersComponent', () => {
  let component: AdmincareersComponent;
  let fixture: ComponentFixture<AdmincareersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincareersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
