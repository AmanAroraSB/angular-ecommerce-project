import { Component ,Input } from '@angular/core';
import { obejct } from 'src/app/object';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
 
  @ Input() items:obejct[]=[];
  @Input() totalsum:number=0;
  ngOnInit(): void {
    if (this.items.length === 0) {
      const item = localStorage.getItem("key");
      if (item !== null) {
        try {
          this.items = JSON.parse(item);
          this.items.forEach(element => {
            this.totalsum+=element.price*element.quantity;
          });
        } catch (error) {
          //console.error("Error parsing data from local storage:", error);
        }
      }
    }
    //console.log(this.items);
  }


deleteItem(item:obejct){
  this.totalsum=0;
  var cartitems= localStorage.getItem("key");
  if(cartitems!=null){
    // console.log(typeof cartitems);
    let quantity=false;
  
    let index:number | undefined = undefined;;
     let parsed:obejct[]=JSON.parse(cartitems);
     parsed.forEach((element : obejct) => {
      //console.log(element.name)
     if(element.name==item.name){
       element.quantity-=1;
       if(element.quantity<1){

         quantity=true;
       index=  parsed.indexOf(element)
       }
       
     }
     this.totalsum+=element.price*element.quantity;
   });
   if(quantity==false){
    localStorage.setItem("key",JSON.stringify(parsed))
    this.items=parsed;
   }else if(quantity==true){
    if(index!=null){

      parsed.splice(index,1)
    }
    localStorage.setItem("key",JSON.stringify(parsed))
    this.items=parsed
   }
}

}

}
