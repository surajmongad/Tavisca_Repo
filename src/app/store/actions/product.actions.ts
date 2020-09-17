import { Action } from '@ngrx/store';
import { Product } from '../../models/product';

export const LIST_PRODUCTS = '[Products] List Fetch';
export const ADD_PRODUCTS = '[Products] Add Product';
export const ADD_DATA_SUCCESS = '[Products] Add Success';
export const UPDATE_PRODUCTS = '[Products] Update Recipe';
export const DELETE_PRODUCTS = '[Products] Delete Recipe';
export const LIST_DATA_SUCCESS = '[Products] List Success';
export const DELETE_PRODUCT_SUCCESS = '[Products] Delete product success';
export const UPDATE_PRODUCT_SUCCESS = '[Products] Update product success';

export class ListProducts implements Action {
  readonly type = LIST_PRODUCTS;
  // tslint:disable-next-line:typedef
  Product() {
    throw new Error('Method not implemented.');
  }
}

export class ListDataSucess implements Action {
  readonly type = LIST_DATA_SUCCESS;
  constructor(public payload: Product[]) { }
}

export class AddProducts implements Action {
  readonly type = ADD_PRODUCTS;
  constructor(public payload: any) { }
}

export class AddSuccess implements Action {
  readonly type = ADD_DATA_SUCCESS;
  constructor(public payload: any) { }
}

export class UpdateProducts implements Action {
  readonly type = UPDATE_PRODUCTS;
  constructor(public payload: { index: number; newProduct: Product }) { }
}

export class DeleteProducts implements Action {
  readonly type = DELETE_PRODUCTS;
  constructor(public payload: number) { }
}

export class UpdateProductSuccess implements Action {
  readonly type = UPDATE_PRODUCT_SUCCESS;
  constructor(public payload: Product) { }
}

export class DeleteProductSuccess implements Action {
  readonly type = DELETE_PRODUCT_SUCCESS;
}

export type ProductActions =
  | ListProducts
  | ListDataSucess
  | AddProducts
  | AddSuccess
  | UpdateProducts
  | DeleteProducts
  | UpdateProductSuccess
  | DeleteProductSuccess;
