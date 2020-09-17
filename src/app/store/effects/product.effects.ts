import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

// tslint:disable-next-line:max-line-length
import { ListDataSucess,
        LIST_PRODUCTS,
        ListProducts,
        DELETE_PRODUCTS,
        DeleteProductSuccess,
        DeleteProducts,
        ADD_PRODUCTS,
        UPDATE_PRODUCTS,
        UpdateProducts,
        UpdateProductSuccess,
        AddProducts,
        AddSuccess } from '../actions/product.actions';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class ProductEffects {

    constructor(private actions: Actions, private authService: AuthService, private router: Router) { }

    @Effect({ dispatch: true })
    ListProducts: Observable<any> = this.actions.pipe(
        ofType(LIST_PRODUCTS),
        map((action: ListProducts) => action),
        mergeMap(payload => {
            return this.authService.getAllProducts().pipe(
                map((data) => new ListDataSucess(data)));
        }));

    @Effect({ dispatch: true })
    createProducts: Observable<any> = this.actions.pipe(
        ofType(ADD_PRODUCTS),
        map((action: AddProducts) => action.payload),
        mergeMap(payload => {
            // tslint:disable-next-line:max-line-length
            return this.authService.createProduct(payload.productName, payload.productNumber, payload.productCategory, payload.productPrice).pipe(
                map((data) => {
                    if (data) {
                        return new AddSuccess(data);
                    }
                }));
        }));

    @Effect({ dispatch: true })
    UpdateProduct: Observable<any> = this.actions.pipe(
        ofType(UPDATE_PRODUCTS),
        map((action: UpdateProducts) => action.payload),
        mergeMap(payload => {
            return this.authService.updateProduct(payload.index, payload.newProduct).pipe(
                map((data) => {
                    if (data) {
                        return new UpdateProductSuccess(data);
                    }
                }));
        }));

    @Effect({ dispatch: true })
    DeleteProduct: Observable<any> = this.actions.pipe(
        ofType(DELETE_PRODUCTS),
        map((action: DeleteProducts) => action.payload),
        mergeMap(payload => {
            return this.authService.deleteProduct(payload).pipe(
                map((data) => {
                    if (data) {
                        return new DeleteProductSuccess();
                    }
                }));
        }));

}
