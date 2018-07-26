import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ProductListService } from '../product-list.service'
import { SwapiService } from '../services/swapi.service'
import { PhonesService } from '../services/phones.service'

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
  // providers: [ProductListService] Es parte de la forma 2
})
export class ProductPageComponent implements OnInit {
  productos: object[] = [];
  productosa: object[] = [];
  characters: object[] = [];
  phones: Array<any>
  constructor
  (
  private router: Router, 
  private productLists: ProductListService,
  private swapi: SwapiService,
  private phoneService: PhonesService
){}

  //Primer manera de hacerlo

  showProduct(productos){
    console.log(productos)
  }

  ngOnInit() {
    this.phoneService.getAllPhones()
    .subscribe(phones => {
      console.log(phones)
      this.phones = phones;   
    })
  }
}


/*    // this.productos = this.productLists.getList();
    this.swapi.getCharacter() 
    .subscribe(response=>{
      this.characters = response.results
      console.log(this.characters)
    })
    this.router.navigate(['signup'])*/