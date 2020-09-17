import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from '../../../services/auth.service';
import { Product } from '../../../models/product';
import { Observable } from 'rxjs';
import { AppState, selectMusicState } from 'src/app/store/app.states';
import { UpdateProducts, ListProducts } from '../../../store/actions/product.actions';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  id: number;
  product: Product;
  editform: FormGroup;
  getState: Observable<any>;
  errorMessage: string | null;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private fbs: FormBuilder,
    private router: Router
  ) {
    this.getState = this.store.select(selectMusicState);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.productId;
    this.authService.getProductById(this.id).subscribe((data: Product) => {
      this.product = data;
    });

    this.editform = this.fbs.group({
      productName: [''],
      productNumber: [''],
      productCategory: [''],
      productPrice: ['']
    });

    this.authService.getProductById(this.id)
        .subscribe(data => {
        this.editform.setValue(data);
      });

  }

  submit(): void {
    const payload = {
      index: this.id,
      newProduct: this.editform.value
    };
    this.store.dispatch(new UpdateProducts(payload));
    this.store.dispatch(new ListProducts());
    this.router.navigateByUrl('/list-product');
  }
}

