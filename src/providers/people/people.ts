import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the People provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class People {
  constructor(public http:Http) {
  }
 getPeople() {
   return this.http.get('https://randomuser.me/api/?results=20')
   .map(res=>res.json().results);
 }
}
