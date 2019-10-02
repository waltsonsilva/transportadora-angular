import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportadoraEditarComponent } from './transportadora-editar.component';

describe('TransportadoraEditarComponent', () => {
  let component: TransportadoraEditarComponent;
  let fixture: ComponentFixture<TransportadoraEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportadoraEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportadoraEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
