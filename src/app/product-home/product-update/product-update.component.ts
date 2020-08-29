import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../services/product/product.service';
import {ActivatedRoute, Router, Params} from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {
  product: FormGroup;
  errorProduct = false;
  validateProduct = false;
  products: any = [];

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private activatedRoute: ActivatedRoute) {
    this.product = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      amount: ['', Validators.required],
    });
    this.getById(this.activatedRoute.snapshot.params.id);
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.errorProduct = Object.keys(this.product.controls).some(input => this.product.get(input).invalid);

    const formData = this.product.getRawValue();
    const jsonForm = JSON.stringify(formData);

    if (this.isValid()) {
      this.errorProduct = false;
      this.productService.updateProduct(formData).subscribe(
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

  getById(id): any {
    this.productService.getById(id)
      .subscribe(value => {
        this.products = value;
        console.log(this.products);
      });
  }

}
