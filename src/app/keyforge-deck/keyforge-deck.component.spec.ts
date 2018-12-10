import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyforgeDeckComponent } from './keyforge-deck.component';

describe('KeyforgeDeckComponent', () => {
  let component: KeyforgeDeckComponent;
  let fixture: ComponentFixture<KeyforgeDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyforgeDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyforgeDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
