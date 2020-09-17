import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingComponent } from './landing.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from '../../services/auth.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;
  let store: MockStore;
  const initialState = {
    errorMessage: null,
    isAuthenticated: false,
    user: null,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingComponent],
      imports: [
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
      ],
      providers: [AuthService, provideMockStore({ initialState })],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
