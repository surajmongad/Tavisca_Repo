import { moduleMetadata } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { HeaderComponent } from './header.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/app.states';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

export default {
  title: 'Header Component',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forRoot([]),
        RouterTestingModule,
        StoreModule.forRoot(reducers, {}),
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;
const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  component: HeaderComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  user: {},
};
