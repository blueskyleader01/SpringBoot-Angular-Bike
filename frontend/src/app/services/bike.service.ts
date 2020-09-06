import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http:HttpClient) { }

  getBikes() {
    let token = localStorage.getItem('access_token')
    return this.http.get('/server/api/v1/bikes',
    {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token )}
    );
  } //we created proxy.conf.json that redirect my url, so /server/api/v1/bikes will be following http://localhost:4200
  //and the new url is http://localhost:4200/server/api/v1/bikes

  getBike(id: number){
    let token = localStorage.getItem('access_token')
    return this.http.get(`/server/api/v1/bikes/${id}`,
    {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token )}
    );
  }

  createBikeRegistration(bike){
    let body = JSON.stringify(bike); 
    return this.http.post('/server/api/v1/bikes', body, httpOptions)
  }

}
