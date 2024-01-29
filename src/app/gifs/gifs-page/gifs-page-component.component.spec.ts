import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsPageComponentComponent } from './gifs-page-component.component';

describe('GifsPageComponentComponent', () => {
  let component: GifsPageComponentComponent;
  let fixture: ComponentFixture<GifsPageComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GifsPageComponentComponent]
    });
    fixture = TestBed.createComponent(GifsPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
