import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoleoComponent } from './portfoleo.component';

describe('PortfoleoComponent', () => {
  let component: PortfoleoComponent;
  let fixture: ComponentFixture<PortfoleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoleoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfoleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
