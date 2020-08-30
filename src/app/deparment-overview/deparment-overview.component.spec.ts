import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparmentOverviewComponent } from './deparment-overview.component';

describe('DeparmentOverviewComponent', () => {
  let component: DeparmentOverviewComponent;
  let fixture: ComponentFixture<DeparmentOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeparmentOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeparmentOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
