import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UppercasecounterComponent } from './uppercasecounter.component';

describe('UppercasecounterComponent', () => {
  let component: UppercasecounterComponent;
  let fixture: ComponentFixture<UppercasecounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UppercasecounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UppercasecounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
