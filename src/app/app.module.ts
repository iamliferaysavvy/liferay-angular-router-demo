import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { HomeComponent } from "./home/home.component";
import { ProductListComponent } from "./product-list/product-list.component";

import { ProductListSidebarComponent } from "./product-list-sidebar/product-list-sidebar.component";

import { ProductDetailComponent } from "./product-detail/product-detail.component";

import { SidebarComponent } from "./sidebar/sidebar.component";

import { routingModule } from "./routing.module";
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    SidebarComponent,
    ProductListSidebarComponent
  ],
  imports: [BrowserModule, routingModule],
  entryComponents: [AppComponent],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: []
})
export class AppModule {
	
	ngDoBootstrap() {}
}


/*@NgModule({
imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
	EmployeeComponent,
	HeaderComponent,
	AddEmployeeComponent,
    // more declarations ...
  ],

  entryComponents: [AppComponent],
  providers: [{provide: APP_BASE_HREF, useValue: '/web/guest/angularportlet'}],
  bootstrap: [],
  // more properties ...
})
export class AppModule {
    ngDoBootstrap() {}

    // ...
}*/
