import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/core/Model/Item';
import { ProductsService } from '../Services/products.service';
import { alertify } from 'alertifyjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})


export class EditComponent implements OnInit {
  foodForm: FormGroup;
  id: string | null = this.route.snapshot.paramMap.get('id');
  item: any;
  url: any[] = [];
  newurl: any[] = [];
  @ViewChild('fileUploader')
  fileUploader!: ElementRef;

  constructor(private fb: FormBuilder, private Producservice: ProductsService, private route: ActivatedRoute, private router: Router) {
    this.Producservice.getdataItembyid(this.id as unknown as number).subscribe(resultt => {
      console.log(resultt);

      this.item = resultt as Item;
      console.log(this.item);
      this.foodForm = this.fb.group({
        name: [this.item.name, Validators.required],
        type: [this.item.type, Validators.required],
        price: [this.item.price, [Validators.required, Validators.min(1)]],
        quantity: [this.item.quantity, [Validators.required, Validators.min(1)]],
        description: [this.item.description, [Validators.required]],
        images: [null,] // You can add validations for image URL format if needed
      });
      this.item.imageUrl.forEach((element: any) => {

        this.url.push(element)
      });
    });
    this.foodForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      quantity: ['', [Validators.required, Validators.min(1)]],
      description: ['', [Validators.required]],
      images: [null] // You can add validations for image URL format if needed
    });
  }
  get description() {
    return this.foodForm.value.description;
  }
  get quantity() {
    return this.foodForm.value.quantity;
  }
  get name() {
    return this.foodForm.value.name;
  }
  get type() {
    return this.foodForm.value.type;
  }
  get price() {
    return this.foodForm.value.price;
  }
  ngOnInit(): void {

  }
  onSubmit(event: any) {

    console.log(event.target.images.files);
    const formData = new FormData();
    var files: Blob[] = [];

    const length = event.target.images.files.length;
    if (length > 0) {
      for (var i = 0; i < length; i++) {
        console.log(i);
        files.push(event.target.images.files[i]);
        formData.append('Images[]', event.target.images.files[i] as File);
      }
      // this.Producservice.uploadimagesItem(formData).subscribe(result => {
      //   console.log(result);
      //   const imageurl = result as string[];
      //   imageurl.forEach(Element => {
      //     this.url.push(Element);
      //   })
      //   console.log(imageurl);

      //   // Code dependent on the image upload result
      //   this.Producservice.EditProductItem({
      //     imageUrl: this.url,
      //     Description: this.description,
      //     quantity: this.quantity,
      //     price: this.price,
      //     type: this.type,
      //     name: this.name
      //   } as Item).subscribe(editResult => {
      //     console.log(editResult);
      //     alertify.set('notifier', 'position', 'top-right');
      //     alertify.success("Product Saved Succesfully");
      //     this.router.navigateByUrl("Admin/list")
      //     // Any further actions after adding the product
      //   });
      // });
      this.Producservice.EditProductItem({
        imageUrl: this.url,
        Description: this.description,
        quantity: this.quantity,
        price: this.price,
        type: this.type,
        name: this.name
      } as Item).subscribe(result => {
        console.log(result);
        alertify.set('notifier', 'position', 'top-right');
        alertify.success("Product Edit Succesfully");
        this.router.navigateByUrl("Admin/list")
      });
    }
    else {
      this.Producservice.EditProductItem({
        imageUrl: this.url,
        Description: this.description,
        quantity: this.quantity,
        price: this.price,
        type: this.type,
        name: this.name
      } as Item).subscribe(editResult => {
        console.log(editResult);
        alertify.set('notifier', 'position', 'top-right');
        alertify.success("Product Edit Succesfully");
        this.router.navigateByUrl("Admin/list")
        // Any further actions after adding the product
      });
    }


  }
  changeimage(event: any) {
    if (event.target != null) {
      console.log(event);

      const length = event.target.files.length;
      for (var i = 0; i < length; i++) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.form[5].files[i]);
        reader.onload = (even: any) => {
          this.newurl.push(even.target.result);
          console.log(this.url);
        }






      }
      //const length= event.target.images.files.length
    }
  }
  // get images(){
  //   return this.foodForm.value.images;
  // }
  removeurl(image: any) {
    var index = this.url.indexOf(image)
    this.url.splice(index, 1);

    console.log(this.url);

  }
  removenewimage(image: any) {
    var index = this.newurl.indexOf(image)
    console.log(index);
    this.newurl.splice(index, 1)
    console.log(this.newurl);




  }
}
