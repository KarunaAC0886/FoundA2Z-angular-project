import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageCosmeticsComponent } from './home-page-cosmetics.component';

describe('HomePageCosmeticsComponent', () => {
  let component: HomePageCosmeticsComponent;
  let fixture: ComponentFixture<HomePageCosmeticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageCosmeticsComponent]
    });
    fixture = TestBed.createComponent(HomePageCosmeticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
