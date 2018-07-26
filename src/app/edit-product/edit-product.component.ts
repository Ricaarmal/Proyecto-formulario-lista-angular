import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListService } from '../product-list.service'
import { PhonesService } from '../services/phones.service'

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
  private route: Router,
  private phoneService: PhonesService  
) { }

  ngOnInit() {
    this.id = this.activatedRoute.parent.snapshot.params.id
   
    this.phoneService.getOnePhone(this.id)
    .subscribe(phone=>{
      this.producto = phone
    })
  }

  saveProducto(){
    if(!window.confirm('Are you Sure?')) return
    this.phoneService.editOnePhone(this.producto)
    .subscribe(()=>{
    this.route.navigate(['products'])
    })
  }

}
