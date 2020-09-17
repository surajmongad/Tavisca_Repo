import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AuthService } from '../services/auth.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let store: MockStore;
  const initialState = {
    errorMessage: null,
    isAuthenticated: false,
    user: null,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [AuthService, provideMockStore({ initialState })],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle', () => {
    component.showColor = false;
    component.toggle();
    expect(component.showColor).toBe(true);
  });
  it('should toggle', () => {
    component.showColor = true;
    component.toggle();
    expect(component.showColor).toBe(false);
  });
});
