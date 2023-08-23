import { Component } from '@angular/core';
import { obejct } from 'src/app/object';
import {ProductsService} from '../../Services/products.service'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  item:obejct[]=[];
  items:any;
  setcartitems:obejct[]=[];
  total:number=0;
  cartitems:object[]=[];
  ngOnInit(): void {
  let get=localStorage.getItem("key")
  if(get!=null)
    this.setcartitems=JSON.parse(get)
  }
    constructor(private productservice:ProductsService){
   productservice.getdata().subscribe(data=>{
    console.log(data);
    this.items=data
   })

    }
  //   const getitem=localStorage.getItem("key");
  //   if(getitem!=null){
   
  //     this.setcartitems=JSON.parse(getitem);
  //    }
  //    this.setcartitems.forEach(element => {
  //     this.total+=element.price*element.quantity;
  //    });
  //  }

addtocart(item:obejct){
  
   // console.log("clicked");
  
 var cartitems= localStorage.getItem("key");
 //console.log(cartitems);
 
 if(cartitems!=null && cartitems!="[]"){
 
// console.log(typeof cartitems);
let found = false;
    let parsed:obejct[]=JSON.parse(cartitems);
  // console.log(parsed);
    
    // console.log(typeof parsed);
    parsed.forEach((element : obejct) => {
       //console.log(element.name)
      if(element.name==item.name){
        element.quantity+=1;
  
        found=true;
        
      }
      
    });
    

    if(found==false){
      //this.setcartitems.push(parsed);
      this.total=0;
      this.setcartitems.push(item);
      this.setcartitems.forEach(element => {
        this.total+=element.price*element.quantity;
      });
      let addelemant=JSON.stringify(this.setcartitems);
      localStorage.setItem("key",addelemant);
      //console.log(this.setcartitems);
      
    }else{
      this.total=0;
      this.setcartitems=(parsed)
      this.setcartitems.forEach(element => {
        this.total+=element.price*element.quantity;
      });
      let addelemant=JSON.stringify(this.setcartitems);
      localStorage.setItem("key",addelemant);
    }
    console.log(parsed);
    
  //  console.log(item);
  //  console.log(cartitems);
  
 
  }else{
  
    
    this.total=0
    this.setcartitems=[];
    this.setcartitems.push(item);
    this.setcartitems.forEach(element => {
      this.total+=element.price*element.quantity;
    });
    let addelemant=JSON.stringify(this.setcartitems)
    localStorage.setItem("key",addelemant);
  }
 
// this.item.push(item);
// localStorage.setItem("key",JSON.stringify(this.item))
}

}