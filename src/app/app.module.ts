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

@NgModule({
  declarations: [
    AppComponent, ContainerComponent, NavComponent, HeaderComponent, NotificationComponent, SearchComponent, ProductsComponent, FilterComponent, DemoComponent, CustomerComponent, NgContentComponent, ContentChilcComponent, SetBackgroundDirective, HighlighterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
