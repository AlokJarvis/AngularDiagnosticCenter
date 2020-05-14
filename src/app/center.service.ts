import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Center } from './models/center.model';
import { Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CenterService {

  constructor(private http:HttpClient) { }
  private addUrl = 'http://localhost:9091/center/addcenter';
  
  public addCenter(center :Center):Observable<any>{
    return this.http.post<any>(this.addUrl,center)
    
}
public delete(id:String):Observable<any>{
  let deleteUrl='http://localhost:9091/center/removecenter/center-id'+id;
  return this.http.delete(deleteUrl,{responseType:'text'})
  
}
getCenterId():Observable<any>
{
  let url= "http://localhost:9091/center/getallcenters";
  return this.http.get(url);
}



}
