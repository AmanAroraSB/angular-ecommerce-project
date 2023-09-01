import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/Item';
import { ProductsService } from 'src/app/Services/products.service';
import * as alertifyjs from 'alertifyjs';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit{
  Item:Item[]=[];
  serarchValue:string=''
  currentPage:number=1;
  constructor(private producservice:ProductsService,private router:Router){
    this.getdata();
    }
  
  ngOnInit(): void {
 
  }
  Edit(id:number){
console.log("edit",id);
this.router.navigateByUrl(`Admin/Edit/${id}`)

  }
  getdata(){
    this.producservice.getdata().subscribe(result=>{
      this.Item=result;
    })
  }
  delete(id:number){
    console.log("delete",id);
    this.producservice.Delete(id).subscribe(result=>{
      if(result=="success"){
        console.log("success");
        alertifyjs.set('notifier','position', 'top-right');
        alertifyjs.success('Delete Successfull');
        this.getdata();
      }
      
    })
  }

}
