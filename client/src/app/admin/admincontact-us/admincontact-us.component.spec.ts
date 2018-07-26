import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincontactUsComponent } from './admincontact-us.component';

describe('AdmincontactUsComponent', () => {
  let component: AdmincontactUsComponent;
  let fixture: ComponentFixture<AdmincontactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincontactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincontactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
