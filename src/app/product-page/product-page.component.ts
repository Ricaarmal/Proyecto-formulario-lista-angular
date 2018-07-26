import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ProductListService } from '../product-list.service'

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
  // providers: [ProductListService] Es parte de la forma 2
})
export class ProductPageComponent implements OnInit {
  productos: object[] = [];
  productosa: object[] = [];

  constructor
  (
  private router: Router, 
  private productLists: ProductListService
){}

  //Primer manera de hacerlo

  showProduct(produto){
    this.productosa.push(produto)
    console.log(produto)
  }

  ngOnInit() {
    this.productos = this.productLists.getList();
    /* this.router.navigate(['signup']) */
  }

}
