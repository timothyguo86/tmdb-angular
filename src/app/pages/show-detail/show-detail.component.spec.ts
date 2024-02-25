import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailComponent } from './show-detail.component';

describe('ShowDetailComponent', () => {
  let component: ShowDetailComponent;
  let fixture: ComponentFixture<ShowDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
