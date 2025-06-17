import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileIntroComponent } from './mobile-intro.component';

describe('MobileIntroComponent', () => {
  let component: MobileIntroComponent;
  let fixture: ComponentFixture<MobileIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
