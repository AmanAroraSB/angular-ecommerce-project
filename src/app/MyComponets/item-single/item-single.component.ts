import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service'
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../Item'
@Component({
  selector: 'app-item-single',
  templateUrl: './item-single.component.html',
  styleUrls: ['./item-single.component.css']
})
export class ItemSingleComponent implements OnInit{
item:any=[];
  constructor(private productservice:ProductsService,private route:ActivatedRoute){}
  id:string | null =this.route.snapshot.paramMap.get('id');

ngOnInit(): void {
  console.log(this.id);
  
  this.productservice.getdatabyid(this.id as unknown as number).subscribe(resultt=>{
    this.item=resultt as Item;
    console.log(this.item);
    
  })

}
}
