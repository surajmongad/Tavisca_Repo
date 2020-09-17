import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AuthService } from './services/auth.service';
import { AuthEffects } from './store/effects/auth.effects';
import { ProductEffects } from './store/effects/product.effects';
import { reducers } from './store/app.states';
import { HeaderComponent } from './header/header.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { ListProductComponent } from './components/product/list-product/list-product.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SignUpComponent,
    LogInComponent,
    HeaderComponent,
    AddProductComponent,
    EditProductComponent,
    ListProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([AuthEffects, ProductEffects]),
    RouterModule.forRoot([
      { path: 'log-in', component: LogInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: '', component: LandingComponent },
      { path: 'add-product', component: AddProductComponent },
      { path: 'list-product', component: ListProductComponent },
      { path: 'edit-product/:productId', component: EditProductComponent },
      { path: '**', redirectTo: '/' },
    ]),
  ],
  providers: [Store, AuthService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
