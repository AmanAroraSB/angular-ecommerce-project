import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../admin/Services/products.service'
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../core/Model/Item'
@Component({
  selector: 'app-item-single',
  templateUrl: './item-single.component.html',
  styleUrls: ['./item-single.component.css']
})
export class ItemSingleComponent implements OnInit {
  item: any = [];
  total: number = 0;
  setcartitems: any[] = [];
  constructor(private productservice: ProductsService, private route: ActivatedRoute) { }
  id: string | null = this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    

    this.productservice.getdataItembyid(this.id as unknown as number).subscribe(resultt => {
      this.item = resultt as Item;


    })

  }
  addtocart(item: Item) {

    // console.log("clicked");

    var cartitems = localStorage.getItem("key");
   

    if (cartitems != null && cartitems != "[]") {
   

      // console.log(typeof cartitems);
      let found = false;
      let parsed: Item[] = JSON.parse(cartitems);
      // console.log(parsed);

      // console.log(typeof parsed);
      parsed.forEach((element: Item) => {
        //console.log(element.name)
        if (element.name == item.name) {
          element.quantity += 1;

          found = true;

        }

      });


      if (found == false) {
        parsed.forEach(element => {

          this.setcartitems.push(element);
        });
       

        this.total = 0;
        this.setcartitems.push(item);
        this.setcartitems.forEach((element: any) => {
          this.total += element.price * element.quantity;
        });
        let addelemant = JSON.stringify(this.setcartitems);
        localStorage.setItem("key", addelemant);
     

      } else {
        this.total = 0;
        this.setcartitems = (parsed)
        this.setcartitems.forEach((element: any) => {
          this.total += element.price * element.quantity;
        });
        let addelemant = JSON.stringify(this.setcartitems);
        localStorage.setItem("key", addelemant);
      }
      console.log(parsed);




    } else {


      this.total = 0
      this.setcartitems = [];
      this.setcartitems.push(item);
      this.setcartitems.forEach((element: any) => {
        this.total += element.price * element.quantity;
      });
      let addelemant = JSON.stringify(this.setcartitems)
      localStorage.setItem("key", addelemant);
    }

    // this.item.push(item);
    // localStorage.setItem("key",JSON.stringify(this.item))
  }

}

