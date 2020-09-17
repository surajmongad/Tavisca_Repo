import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { AuthActionTypes, LogIn, LogInSuccess, LogInFailure, SignUp, SignUpSuccess, SignUpFailure, LogOut } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {

  constructor(private actions: Actions, private authService: AuthService, private router: Router) { }

  @Effect()
  LogIn: Observable<any> = this.actions
      .pipe(ofType(AuthActionTypes.LOGIN))
      .pipe(map((action: LogIn) => action.payload))
        .pipe(switchMap(payload => {
        return this.authService.logIn(payload.email, payload.password)
        .pipe(map((user) => {
            return new LogInSuccess({ token: user.token, email: payload.email });
          })).pipe(catchError((error) => {
            return of(new LogInFailure({ error }));
          }));
      }));

  @Effect({dispatch: false })
  LogInSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    tap((user) => {
      localStorage.setItem('token', user.payload.token);
      this.router.navigateByUrl('/list-product');
    })
  );

  @Effect({ dispatch: false })
  LogInFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_FAILURE)
  );

  @Effect()
  SignUp: Observable<any> = this.actions.pipe(ofType(AuthActionTypes.SIGNUP)).pipe(
    map((action: SignUp) => action.payload)).pipe(
      switchMap(payload => {
        return this.authService.signUp(payload.email, payload.password).pipe(
          map((user) => {
            return new SignUpSuccess({ token: user.token, email: payload.email });
          })).pipe(catchError((error) => {
            return of(new SignUpFailure({ error }));
          }));
      }));

  @Effect({ dispatch: false })
  SignUpSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP_SUCCESS),
    tap((user) => {
      localStorage.setItem('token', user.payload.token);
      this.router.navigateByUrl('/log-in');
    })
  );

  @Effect({ dispatch: false })
  public LogOut: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGOUT),
    tap((user) => {
      localStorage.removeItem('token');
    })
  );
}
