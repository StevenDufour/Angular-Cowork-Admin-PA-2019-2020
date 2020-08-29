import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../services/product/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  product: FormGroup;
  errorProduct = false;
  validateProduct = false;

  constructor(private formBuilder: FormBuilder, private productService: ProductService) {
    this.product = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      amount: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.errorProduct = Object.keys(this.product.controls).some(input => this.product.get(input).invalid);

    const formData = this.product.getRawValue();
    const jsonForm = JSON.stringify(formData);

    if (this.isValid()) {
      this.errorProduct = false;
      this.productService.createProduct(formData).subscribe(
        res => console.log(res),
        error => console.log(error)
      );
      this.validateProduct = true;
    }

  }

  isValid(): boolean {
    if (this.errorProduct === false){
      return true;
    }
  }

}
