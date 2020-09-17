import { moduleMetadata } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { LogInComponent } from './log-in.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/app.states';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';

export default {
  title: 'Login Component',
  component: LogInComponent,
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
const Template: Story<LogInComponent> = (args: LogInComponent) => ({
  component: LogInComponent,
  props: args,
});
export const Default = Template.bind({});
Default.args = {
  user: {},
};
