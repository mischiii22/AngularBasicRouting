import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomcolordisplayComponent } from './randomcolordisplay.component';

describe('RandomcolordisplayComponent', () => {
  let component: RandomcolordisplayComponent;
  let fixture: ComponentFixture<RandomcolordisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomcolordisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomcolordisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
