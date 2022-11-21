import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserManagementComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent},
      { path: 'auth/action', component: AuthComponent},
      { path: 'usermgmt', component: UserManagementComponent},
      { path: 'privacy-policy', component: PrivacyPolicyComponent},
      { path: 'terms-conditions', component: TermsConditionsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
