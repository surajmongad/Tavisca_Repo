import { moduleMetadata } from '@storybook/angular';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SignUpComponent } from './sign-up.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/app.states';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';

export default {
  title: 'Singup Component',
  component: SignUpComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forRoot([]),
        RouterTestingModule,
        StoreModule.forRoot(reducers, {}),
      ],
      providers: [AuthService, { provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;

const Template: Story<SignUpComponent> = (args: SignUpComponent) => ({
  component: SignUpComponent,
  props: args,
});
export const Default = Template.bind({});
Default.args = {
  user: {},
};
