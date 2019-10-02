import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportadoraPesquisaComponent } from './transportadora-pesquisa.component';

describe('TransportadoraPesquisaComponent', () => {
  let component: TransportadoraPesquisaComponent;
  let fixture: ComponentFixture<TransportadoraPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportadoraPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportadoraPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
