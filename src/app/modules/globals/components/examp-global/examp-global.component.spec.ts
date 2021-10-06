import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampGlobalComponent } from './examp-global.component';

describe('ExampGlobalComponent', () => {
  let component: ExampGlobalComponent;
  let fixture: ComponentFixture<ExampGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
