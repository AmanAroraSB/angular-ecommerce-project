import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  foodForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.foodForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      quantity: ['', [Validators.required, Validators.min(1)]],
      description: ['',[Validators.required]],
      imageUrl: ['',[Validators.required]] // You can add validations for image URL format if needed
    });
  }
  onSubmit() {
    if (this.foodForm.valid) {
      // Here you can send the form data to your API for adding the food item
      console.log(this.foodForm.value);
      // Clear the form after submission
      this.foodForm.reset();
    }
  }
}
