import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReverseComponent } from './card-reverse.component';

describe('CardReverseComponent', () => {
  let component: CardReverseComponent;
  let fixture: ComponentFixture<CardReverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardReverseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
