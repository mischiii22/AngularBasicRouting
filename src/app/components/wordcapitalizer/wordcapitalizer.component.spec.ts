import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordcapitalizerComponent } from './wordcapitalizer.component';

describe('WordcapitalizerComponent', () => {
  let component: WordcapitalizerComponent;
  let fixture: ComponentFixture<WordcapitalizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordcapitalizerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordcapitalizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
