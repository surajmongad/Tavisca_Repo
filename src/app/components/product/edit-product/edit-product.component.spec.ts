import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { EditProductComponent } from './edit-product.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AuthService } from '../../../services/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EditProductComponent', () => {
  let component: EditProductComponent;
  let fixture: ComponentFixture<EditProductComponent>;
  let store: MockStore;
  const initialState = {
    errorMessage: null,
    isAuthenticated: false,
    user: null,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditProductComponent],
      imports: [
        FormsModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      providers: [AuthService, provideMockStore({ initialState })],
    }).compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
