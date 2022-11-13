import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserManagementComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path: 'usermgmt', component: UserManagementComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
