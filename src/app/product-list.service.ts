import { Injectable } from '@angular/core';
import { resolve, reject } from 'q';


@Injectable({
  providedIn: 'root' //Sirve pero no.
})

export class ProductListService {
  
  constructor() { }

  productos: Array<any>=[
    {
      _id: 0,
      name: "Taza",
      price: 20,
      describe: "PAl coffe",
      pic: '' 
    },
    {
      _id: 1,
      name: "Silla",
      price: 999,
      describe: "Pal coffetambnien",
      pic: ''
    },
    {
      _id: 2,
      name: "Mesa",
      price: 8926,
      describe: "Palcoffe wiii",
      pic: ''
    },
    {
      _id: 3,
      name: "Leche",
      price: 6378,
      describe: "Leche de vaca",
      pic: ''
    }
  ]

  getList(){
    return this.productos;
  }

  getOneProduct(id){
    return this.productos.find(p=>p._id == id)
    //Aqui va estar con el aproach de MongoDB filter devuelve un error
  }

  updateProduct(product){
    return new Promise((resolve, reject)=>{
    this.productos = this.productos.map(p=>{
      if(p.id == product._id) return product
      return p
    })
    console.log(this.productos)

    return resolve()
  })
    // this.productos = [...this.productos.filter(p=>p._id == product._id), product]
  }
}
