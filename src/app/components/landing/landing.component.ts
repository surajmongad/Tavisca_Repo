import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Product } from '../../models/product';
import { AppState, selectAuthState } from '../../store/app.states';
import { LogOut } from '../../store/actions/auth.actions';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {


  getState: Observable<any>;
  isAuthenticated: false;
  user = null;
  errorMessage = null;
  products: Product[];

  constructor(private store: Store<AppState>, private router: Router, private authService: AuthService) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
      this.errorMessage = state.errorMessage;
    });

    this.authService.getAllProducts()
      .subscribe(data => {
        this.products = data;
      });
  }

  logOut(): void {
    // tslint:disable-next-line:new-parens
    this.store.dispatch(new LogOut);
  }

}

