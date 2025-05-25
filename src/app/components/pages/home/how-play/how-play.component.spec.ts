import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowPlayComponent } from './how-play.component';

describe('HowPlayComponent', () => {
  let component: HowPlayComponent;
  let fixture: ComponentFixture<HowPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowPlayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
