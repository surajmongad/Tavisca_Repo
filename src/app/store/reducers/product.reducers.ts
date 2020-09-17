import { Product } from '../../models/product';
// tslint:disable-next-line:max-line-length
import { LIST_PRODUCTS,
         LIST_DATA_SUCCESS,
         ProductActions,
         ADD_PRODUCTS,
         UPDATE_PRODUCTS,
         DELETE_PRODUCTS,
         DELETE_PRODUCT_SUCCESS,
         UPDATE_PRODUCT_SUCCESS } from '../actions/product.actions';

export interface State {
  products: Product[];
  user: Product | null;
}

const initialState: State = {
  products: [],
  user: null
};

// tslint:disable-next-line:typedef
export function productReducer(
  state = initialState,
  action: ProductActions
) {

  switch (action.type) {

    case LIST_PRODUCTS:
      return {
        ...state,
        products: [...state.products]
      };
    case LIST_DATA_SUCCESS: {
      return {
        products: action.payload,
        message: null
      };
    }
    case ADD_PRODUCTS: {
      return {
        ...state
      };
    }
    case UPDATE_PRODUCTS: {
      return {
        ...state
      };
    }
    case DELETE_PRODUCTS: {
      return {
        ...state
      };
    }

    case DELETE_PRODUCT_SUCCESS: {
      return {
        ...state,
      };
    }
    case UPDATE_PRODUCT_SUCCESS: {
      return {
        ...state,
        message: 'The product is updated successfully!',
        added: true
      };
    }
    default:
      return state;
  }
}
