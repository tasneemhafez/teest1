import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  imges:string=''
  hamada:boolean =false;
  clicke(item:string){
   if(item === 'one'){
     this.imges = '/../assets/img/poert1.png';
     this.hamada =true;
  }
  else if (item==='two'){
   this.imges = '/../assets/img/port2.png';
   this.hamada =true;
  }
  else if (item==='three'){
   this.imges = '/../assets/img/port3.png';
   this.hamada =true;
  }
 }
 exit(){
   this.imges='';
   this.hamada=false;
 }
}
