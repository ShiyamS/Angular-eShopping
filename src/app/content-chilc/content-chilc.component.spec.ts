import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChilcComponent } from './content-chilc.component';

describe('ContentChilcComponent', () => {
  let component: ContentChilcComponent;
  let fixture: ComponentFixture<ContentChilcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentChilcComponent]
    });
    fixture = TestBed.createComponent(ContentChilcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
