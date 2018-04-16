import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DatabaseService} from "./database.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Crud Rest Api';
  studform=new FormGroup({
    id:new FormControl(),
    nm:new FormControl(),
    ad:new FormControl()
  });
  constructor(private database:DatabaseService){
    this.onView();
  }
  onIns(){
    let frm= new FormData();
    frm.append('nm',this.studform.get('nm').value);
    frm.append('ad',this.studform.get('ad').value);
    console.log(frm);
    this.database.dbIns(frm).subscribe((res)=>{
      console.log(res);
    });
  }
  onView(){
    this.database.dbview().subscribe((res)=>{
      console.log(res);
    });
  }
}
