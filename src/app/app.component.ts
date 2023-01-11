import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  data:any;
  dataList:number = 0;
  p: number = 1;
  constructor(private api:ApiService) { }


  ngOnInit(): void {
    this.listData();
  }
listData() {
  this.api.getListData(this.p).subscribe((res:any)=>{
    this.data = res.data;
    this.dataList = res.total;
    console.log(res.total)
  })
}

page(event:number) {
  this.p = event;
  this.listData()
}

  
}
