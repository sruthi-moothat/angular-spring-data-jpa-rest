import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinLosePageComponent } from './win-lose-page.component';

describe('WinLosePageComponent', () => {
  let component: WinLosePageComponent;
  let fixture: ComponentFixture<WinLosePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinLosePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinLosePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
