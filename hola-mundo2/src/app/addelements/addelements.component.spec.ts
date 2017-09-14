import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddelementsComponent } from './addelements.component';

describe('AddelementsComponent', () => {
  let component: AddelementsComponent;
  let fixture: ComponentFixture<AddelementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddelementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddelementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
