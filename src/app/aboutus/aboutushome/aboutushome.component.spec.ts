import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutushomeComponent } from './aboutushome.component';

describe('AboutushomeComponent', () => {
  let component: AboutushomeComponent;
  let fixture: ComponentFixture<AboutushomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutushomeComponent]
    });
    fixture = TestBed.createComponent(AboutushomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
