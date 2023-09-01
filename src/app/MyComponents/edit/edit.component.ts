import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/Item';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  foodForm: FormGroup;
  id:string | null =this.route.snapshot.paramMap.get('id');
  item:any;
  constructor(private fb: FormBuilder,private Producservice:ProductsService,private route:ActivatedRoute) {
    this.Producservice.getdatabyid(this.id as unknown as number).subscribe(resultt=>{
      console.log(resultt);
      
      this.item=resultt as Item;
      console.log(this.item);
      this.foodForm = this.fb.group({
        name: [this.item.name, Validators.required],
        type: [this.item.type, Validators.required],
        price: [this.item.price, [Validators.required, Validators.min(1)]],
        quantity: [this.item.quantity, [Validators.required, Validators.min(1)]],
        description: [this.item.description,[Validators.required]],
        images: [null,[Validators.required]] // You can add validations for image URL format if needed
      });
    });
    this.foodForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      quantity: ['', [Validators.required, Validators.min(1)]],
      description: ['',[Validators.required]],
      images: [null,[Validators.required]] // You can add validations for image URL format if needed
    });
}
  ngOnInit(): void {
 
    }
onSubmit(event:Event){

}
}