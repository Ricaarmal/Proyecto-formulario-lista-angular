import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
// import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  
  url: string = "https://swapi.co/api/people/"

  constructor(private http: Http) { }

  getCharacter(): Observable<string>{
    return this.http.get(this.url)
    .pipe(map((res: Response) => res.json()))
  }

  getPromiseCharacter(){
    return this.http.get(this.url).toPromise()
    .then((res: Response)=>res.json())
  }
}
