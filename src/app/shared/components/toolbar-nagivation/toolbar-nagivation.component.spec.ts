import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarNagivationComponent } from './toolbar-nagivation.component';

describe('ToolbarNagivationComponent', () => {
  let component: ToolbarNagivationComponent;
  let fixture: ComponentFixture<ToolbarNagivationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarNagivationComponent]
    });
    fixture = TestBed.createComponent(ToolbarNagivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
