import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DatabaseService {

  constructor(private http:HttpClient) { }
  dbIns(data){
    return this.http.post("http://localhost/angularapi/apiclass.php?action=insstud",data);
  }
  dbview(){
    return this.http.get("http://localhost/angularapi/apiclass.php?action=viewstud");
  }
}
