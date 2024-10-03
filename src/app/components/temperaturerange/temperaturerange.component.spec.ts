import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturerangeComponent } from './temperaturerange.component';

describe('TemperaturerangeComponent', () => {
  let component: TemperaturerangeComponent;
  let fixture: ComponentFixture<TemperaturerangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemperaturerangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperaturerangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
