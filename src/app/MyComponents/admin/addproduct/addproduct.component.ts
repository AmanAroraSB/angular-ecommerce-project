import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from 'src/app/core/Model/Item';
import { ProductsService } from '../Services/products.service';
import alertify from 'alertifyjs'
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  foodForm: FormGroup;

  constructor(private fb: FormBuilder, private Producservice: ProductsService, private router: Router) {
    this.foodForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      quantity: ['', [Validators.required, Validators.min(1)]],
      description: ['', [Validators.required]],
      images: [null, [Validators.required]] // You can add validations for image URL format if needed
    });
  }
  onSubmit(event: any): void {
    var files: Blob[] = [];
    var product: Item;
    var imageurl: string[] = []

    const length = event.target.images.files.length;
    const formData = new FormData(); // Correct the casing here

    for (var i = 0; i < length; i++) {
      ;
      files.push(event.target.images.files[i]);
      formData.append('Images[]', event.target.images.files[i] as File);
    }


    this.Producservice.uploadimagesItem(formData).subscribe(result => {

      const imageurl = result as string[];


      // Code dependent on the image upload result
      this.Producservice.AddProductItem({
        ImageUrl: imageurl,
        Description: this.description?.value,
        Quantity: this.quantity?.value,
        Price: this.price?.value,
        Type: this.type?.value,
        Name: this.name?.value
      } as Item).subscribe(addResult => {

        alertify.set('notifier', 'position', 'top-right');
        alertify.success("Product Saved Succesfully");
        this.router.navigateByUrl("Admin/list")
        // Any further actions after adding the product
      });
    });

  }

  get description() {
    return this.foodForm.get("description");
  }
  get quantity() {
    return this.foodForm.get("quantity");
  }
  get name() {
    return this.foodForm.get("name");
  }
  get type() {
    return this.foodForm.get("type");
  }
  get price() {
    return this.foodForm.get("price");
  }
  get Image() {
    return this.foodForm.get("images");
  }
}
