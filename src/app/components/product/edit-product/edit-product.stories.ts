import { moduleMetadata } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { EditProductComponent } from './edit-product.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../../store/app.states';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

export default {
  title: 'Edit Product Component',
  component: EditProductComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([]),
        RouterTestingModule,
        ReactiveFormsModule,
        StoreModule.forRoot(reducers, {}),
      ],
      providers: [AuthService, { provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<EditProductComponent> = (args: EditProductComponent) => ({
  component: EditProductComponent,
  props: args,
});
export const Default = Template.bind({});
Default.args = {
  user: {},
};
