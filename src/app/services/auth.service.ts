import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user';
import { Product } from '../models/product';


@Injectable()
export class AuthService {
  public BASE_URL = 'http://localhost:3000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getToken(): string {
    return localStorage.getItem('token');
  }

  logIn(email: string, password: string): Observable<any> {
    const url = `${this.BASE_URL}/login`;
    return this.http.post<User>(url, { email, password }, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  signUp(email: string, password: string): Observable<User> {
    const url = `${this.BASE_URL}/register`;
    return this.http.post<User>(url, { email, password }, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  getSignUpData(): Observable<Product[]> {
    const url = `${this.BASE_URL}/register`;
    return this.http.get<Product[]>(url, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  getAllProducts(): Observable<Product[]> {
    const url = `${this.BASE_URL}/products`;
    return this.http.get<Product[]>(url, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  getProductById(id: number): Observable<Product> {
    const url = `${this.BASE_URL}/products/`;
    return this.http.get<Product>(url + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  createProduct(productName: string, productNumber: number, productCategory: string, productPrice: number): Observable<Product> {
    const url = `${this.BASE_URL}/products`;
    return this.http.post<Product>(url, { productName, productNumber, productCategory, productPrice }, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  deleteProduct(id: number): Observable<any> {
    const url = `${this.BASE_URL}/products`;
    return this.http.delete(`${this.BASE_URL}/` + 'products/' + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  updateProduct(id, user): Observable<Product> {
    const url = `${this.BASE_URL}/products/`;
    return this.http.put<Product>(url + id, user, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  // tslint:disable-next-line:typedef
  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
