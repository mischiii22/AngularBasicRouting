import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsorterComponent } from './listsorter.component';

describe('ListsorterComponent', () => {
  let component: ListsorterComponent;
  let fixture: ComponentFixture<ListsorterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListsorterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
