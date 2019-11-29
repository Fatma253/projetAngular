import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EffacerArticleComponent } from './effacer-article.component';

describe('EffacerArticleComponent', () => {
  let component: EffacerArticleComponent;
  let fixture: ComponentFixture<EffacerArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffacerArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EffacerArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
