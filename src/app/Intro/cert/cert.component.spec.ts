import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertComponent } from './cert.component';

describe('CertComponent', () => {
  let component: CertComponent;
  let fixture: ComponentFixture<CertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
