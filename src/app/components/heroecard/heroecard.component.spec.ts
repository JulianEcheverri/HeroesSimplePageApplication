import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroecardComponent } from './heroecard.component';

describe('HeroecardComponent', () => {
  let component: HeroecardComponent;
  let fixture: ComponentFixture<HeroecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
