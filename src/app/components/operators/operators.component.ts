import { Component, OnInit } from '@angular/core';
import { filter, find, from, map, scan } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {
  mapobs:any;
  filterobs:any;
  scanobs:any;
  findobs:any;
 ngOnInit(): void {
   this.mapobs=this.obs.pipe(
    map((v)=> {
      return v *4
    })
   )

   this.mapobs.subscribe((b:any)=>{
    console.log(b)
   })



   this.filterobs=this.obs.pipe(
    filter((v)=>{
      return v%2 === 0 
    })
   )

   this.filterobs.subscribe((b:any)=>{
    console.log(b)
   })


  this.scanobs = this.obs.pipe(
    scan((b1, b2)=>
      b1 + b2 ,0
    )
  )
  
  this.scanobs.subscribe((b:any)=>{
    console.log(b)
  })

  this.findobs = this.obs.pipe(find( b=>
    b%2 === 0 
  ))

  this.findobs.subscribe((v:any)=> console.log(v))

 }


 obs= from([1,2,3,4,5,6,7,8])




}
