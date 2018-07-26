import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { CardProductComponent } from './card-product/card-product.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { DetailComponent } from './detail/detail.component';
//routes

import { routes } from './routes'

//services
import { ProductListService } from './product-list.service';
import { EditProductComponent } from './edit-product/edit-product.component'


@NgModule({
  declarations: [
    AppComponent,
    CardProductComponent,
    SignupFormComponent,
    ProductPageComponent,
    DetailComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes) //Jalando las rutas
  ],
  providers: [ProductListService], //Esta es la forma 2
  bootstrap: [AppComponent]
})
export class AppModule { }
