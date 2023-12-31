import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { FilterComponent } from './filter/filter.component';
import { DemoComponent } from './demo/demo.component';
import { CustomerComponent } from './customer/customer.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { ContentChilcComponent } from './content-chilc/content-chilc.component';
import { SetBackgroundDirective } from './customDirectives/setBackground.directive';
import { HighlighterDirective } from './customDirectives/highlighter.directive';
import { HoverDirective } from './customDirectives/hover.directive';
import { BetterHighlighterDirective } from './customDirectives/better-highlighter.directive';
import { ClassDirective } from './customDirectives/class.directive';
import { Highlighter2Directive } from './customDirectives/highlighter2.directive';
import { StyleDirective } from './customDirectives/style.directive';
import { IfDirective } from './customDirectives/if.directive';
import { AngularComponent } from './angular/angular.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { EnrollService } from './services/enroll.service';
import { AddUserComponent } from './add-user/add-user.component';
import { UserService } from './services/user.service';
import { LoggerService } from './services/logger.service';
import { UsersService } from './services/users.service';
import { AllUsersComponent } from './all-users/all-users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

@NgModule({
  declarations: [
    AppComponent, ContainerComponent, NavComponent, HeaderComponent, NotificationComponent, SearchComponent, ProductsComponent, FilterComponent, DemoComponent, CustomerComponent, NgContentComponent, ContentChilcComponent, SetBackgroundDirective, HighlighterDirective, HoverDirective, BetterHighlighterDirective, ClassDirective, Highlighter2Directive, StyleDirective, IfDirective, AngularComponent, JavascriptComponent, AddUserComponent, AllUsersComponent, UserDetailComponent, Comp1Component, Comp2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [EnrollService, UserService, LoggerService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
