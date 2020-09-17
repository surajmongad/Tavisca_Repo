// tslint:disable-next-line:max-line-length
import { ListProducts,
         LIST_PRODUCTS,
         ListDataSucess,
         LIST_DATA_SUCCESS,
         AddProducts,
         ADD_PRODUCTS,
         ADD_DATA_SUCCESS,
         AddSuccess,
         UpdateProducts,
         UPDATE_PRODUCTS,
         UpdateProductSuccess,
         UPDATE_PRODUCT_SUCCESS,
         DeleteProductSuccess,
         DELETE_PRODUCT_SUCCESS } from './product.actions';
import { Product } from '../../models/product';

const newProduct: Product = {
    id: 1,
    productName: 'T-Shirt 990 BLUE',
    productNumber: 1212121,
    productCategory: 'Sports \ T-Shirts',
    productPrice: 155,
};
const index = 1;

describe('ListProducts', () => {
    it('should create an action', () => {
        const action = new ListProducts();
        expect(action.type).toEqual(LIST_PRODUCTS);
    });
});

describe('ListDataSucess', () => {
    it('should create an action', () => {
        const payload: Product[] = [
            {
                id: 1,
                productName: 'T-Shirt 990 BLUE',
                productNumber: 1212121,
                productCategory: 'Sports \ T-Shirts',
                productPrice: 155,
            },
            {
                id: 2,
                productName: 'T-Shirt 990 BK',
                productNumber: 1455,
                productCategory: 'Sports \ T-Shirts',
                productPrice: 1400,
            },
            {
                id: 3,
                productName: 'T-Shirt 990 RED',
                productNumber: 14555,
                productCategory: 'Sports \\ T-Shirts',
                productPrice: 5555,
            },
            {
                id: 4,
                productName: 'T-Shirt 990 WHITE',
                productNumber: 78855,
                productCategory: 'Sports \\ T-Shirts',
                productPrice: 3550,
            }
        ];
        const action = new ListDataSucess(payload);
        expect({ ...action }).toEqual({
            type: LIST_DATA_SUCCESS,
            payload,
        });
    });
});

describe('AddProducts', () => {
    it('should create an action', () => {
        const payload: Product = {
            id: 1,
            productName: 'T-Shirt 990 BLUE',
            productNumber: 1212121,
            productCategory: 'Sports \ T-Shirts',
            productPrice: 155,
        };
        const action = new AddProducts(payload);
        expect({ ...action }).toEqual({
            type: ADD_PRODUCTS,
            payload,
        });
    });
});

describe('AddSuccess', () => {
    it('should create an action', () => {
        const payload: Product = {
            id: 1,
            productName: 'T-Shirt 990 BLUE',
            productNumber: 1212121,
            productCategory: 'Sports \ T-Shirts',
            productPrice: 155,
        };
        const action = new AddSuccess(payload);
        expect({ ...action }).toEqual({
            type: ADD_DATA_SUCCESS,
            payload,
        });
    });
});

describe('UpdateProducts', () => {
    it('should create an action', () => {
        const payload: { index: number; newProduct: Product } = {
            index,
            newProduct,
        };
        const action = new UpdateProducts(payload);
        expect({ ...action }).toEqual({
            type: UPDATE_PRODUCTS,
            payload,
        });
    });
});

describe('UpdateProductSuccess', () => {
    it('should create an action', () => {
        const payload: Product = {
            id: 1,
            productName: 'T-Shirt 990 BLUE',
            productNumber: 1212121,
            productCategory: 'Sports \ T-Shirts',
            productPrice: 155,
        };
        const action = new UpdateProductSuccess(payload);
        expect({ ...action }).toEqual({
            type: UPDATE_PRODUCT_SUCCESS,
            payload,
        });
    });
});

describe('DeleteProductSuccess', () => {
    it('should create an action', () => {
        const action = new DeleteProductSuccess();
        expect({ ...action }).toEqual({
            type: DELETE_PRODUCT_SUCCESS,
        });
    });
});
