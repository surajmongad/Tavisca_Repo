import { moduleMetadata } from '@storybook/angular';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ListProductComponent } from './list-product.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../../store/app.states';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

export default {
  title: 'List Product Component',
  component: ListProductComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot([]),
        RouterTestingModule,
        StoreModule.forRoot(reducers, {}),
      ],
      providers: [AuthService, { provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<ListProductComponent> = (args: ListProductComponent) => ({
  component: ListProductComponent,
  props: args,
});
export const Default = Template.bind({});
Default.args = {
  user: {},
};
