import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'prj1';
  rang = "200000";
  exp = '50000';
  num=new Number(100000).toLocaleString('en-IN');
  loan=Number(15000).toLocaleString('en-IN')

ngOnInit()
{
// console.log(this.num);

}
  binder(event: any) {
    this.rang = event.target.value
  }
  expense(event: any) {
    this.exp = event.target.value;
  }

}
