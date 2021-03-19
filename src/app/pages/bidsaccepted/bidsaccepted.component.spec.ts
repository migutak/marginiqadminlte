import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidsacceptedComponent } from './bidsaccepted.component';

describe('BidsacceptedComponent', () => {
  let component: BidsacceptedComponent;
  let fixture: ComponentFixture<BidsacceptedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidsacceptedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidsacceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
