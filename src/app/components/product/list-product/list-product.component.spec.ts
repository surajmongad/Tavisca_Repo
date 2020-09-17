import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ListProductComponent } from './list-product.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from 'src/app/services/auth.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

describe('ListProductComponent', () => {
  let component: ListProductComponent;
  let fixture: ComponentFixture<ListProductComponent>;
  let store: MockStore;
  const initialState = {
    isAuthenticated: false,
    user: null,
    errorMessage: null
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListProductComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [provideMockStore({ initialState }), AuthService],
    })
    .compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
