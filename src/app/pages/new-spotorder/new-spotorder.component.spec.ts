import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSpotorderComponent } from './new-spotorder.component';

describe('NewSpotorderComponent', () => {
  let component: NewSpotorderComponent;
  let fixture: ComponentFixture<NewSpotorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSpotorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSpotorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
