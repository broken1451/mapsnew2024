import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreanPageComponent } from './full-screan-page.component';

describe('FullScreanPageComponent', () => {
  let component: FullScreanPageComponent;
  let fixture: ComponentFixture<FullScreanPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullScreanPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullScreanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
