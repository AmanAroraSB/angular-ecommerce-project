import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-item-single',
  templateUrl: './item-single.component.html',
  styleUrls: ['./item-single.component.css']
})
export class ItemSingleComponent implements OnInit{
  constructor(private productservice:ProductsService,private route:ActivatedRoute){}
  id:string | null =this.route.snapshot.paramMap.get('id');;
ngOnInit(): void {
  this.productservice.getdatabyid(this.id as unknown as number).subscribe(resultt=>{
    console.log(resultt)
  })

}
}
