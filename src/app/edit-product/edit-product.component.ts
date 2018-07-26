import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListService } from '../product-list.service'

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  id: string;
  producto: any;

  constructor(private activatedRoute: ActivatedRoute,
  private service: ProductListService,
  private route: Router  
) { }

  ngOnInit() {
    this.id = this.activatedRoute.parent.snapshot.params.id
   
    this.producto = this.service.getOneProduct(this.id)
  }

  saveProducto(producto){
    if(!window.confirm('Are you Sure?')) return
    this.service.updateProduct(producto)
    .then(()=>{
    this.route.navigate(['products'])
    })
  }

}
