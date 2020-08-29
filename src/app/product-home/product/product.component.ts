import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: any = [];
  displayedColumns: string[] = ['name', 'type', 'description', 'price', 'amount', 'update', 'delete'];

  constructor(private productService: ProductService) {
    this.products = this.getAllProducts();
  }

  ngOnInit(): void {
  }

  getAllProducts(): any {
    this.productService.getAllProducts()
      .subscribe(value => this.products = value);
  }


  deleteProduct(id): any {
    console.log(id);
    this.productService.deleteProduct(id).subscribe(complete => this.getAllProducts());
    window.location.reload();
  }

}
