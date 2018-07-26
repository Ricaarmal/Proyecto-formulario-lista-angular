import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductListService } from '../product-list.service'
import { query } from '@angular/core/src/render3/query';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProductListService]
})
export class DetailComponent implements OnInit {
  id: any;
  producto: any;
  constructor(private activeRoute: ActivatedRoute, 
  private servie: ProductListService) { }

  ngOnInit() {
    this.activeRoute.params
    .subscribe(params=>{
      console.log(params.id)
      this.id = params.id

      this.producto = this.servie.getOneProduct(this.id)
      console.log(this.producto)
    })

//Query

    this.activeRoute.queryParams
    .subscribe(query=>{
    })
    /* console.log(this.activeRoute.params._value.id) Esto no se hace */
  }

}
