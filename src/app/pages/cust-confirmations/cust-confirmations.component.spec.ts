import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustConfirmationsComponent } from './cust-confirmations.component';

describe('CustConfirmationsComponent', () => {
  let component: CustConfirmationsComponent;
  let fixture: ComponentFixture<CustConfirmationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustConfirmationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustConfirmationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
