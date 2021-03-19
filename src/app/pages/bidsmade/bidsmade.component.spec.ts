import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidsmadeComponent } from './bidsmade.component';

describe('BidsmadeComponent', () => {
  let component: BidsmadeComponent;
  let fixture: ComponentFixture<BidsmadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidsmadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidsmadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
