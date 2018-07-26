import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class PhonesService{
  url = 'http://localhost:3000/'

  constructor(private http: Http){}

  getAllPhones(){
    return this.http.get(this.url)
    .pipe(map((res: Response)=> res.json()))
  }  

  getOnePhone(id){
    return this.http.get(this.url + id)
    .pipe(map((res: Response)=>res.json()))
  }

  createPhone(obj){
    return this.http.post(this.url, obj)
        .pipe(map((res: Response)=>res.json()))                                                             
  }    
  //edit one phone
  editOnePhone(obj){
      return this.http.put(this.url + obj._id, obj) 
          .pipe(map((res: Response)=>res.json()))    
  
  }    
  
      //delete one phone richard
  deletePhone(id){
    return this.http.delete(this.url + id)
      .pipe(map((res: Response)=>res.json()))                                                                
  }    

}