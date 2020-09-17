import { moduleMetadata } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { LandingComponent } from './landing.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/app.states';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';

export default {
  title: 'Landing Component',
  component: LandingComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        HttpClientModule,
        StoreModule.forRoot(reducers, {}),
        RouterTestingModule,
        RouterModule.forRoot([]),
      ],
      providers: [AuthService, { provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
} as Meta;
const Template: Story<LandingComponent> = (args: LandingComponent) => ({
  component: LandingComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  user: {},
};
