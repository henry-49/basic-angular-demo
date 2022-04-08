import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  isDisabled = true;
  products = ['A Book', 'A Chair'];
  productName = 'A Book';

  constructor() {
    setTimeout(() => {
      // this.productName = 'A Bag';
      this.isDisabled = false;
      }, 3000);
  }


  ngOnInit(){
  }

  onAddProduct(form: NgForm){
    if(form.valid){
      this.products.push(form.value.productName)
    }
    // console.log(form);
    // this.products.push(this.productName);
  }

  onRemoveProduct(productName: string){
    // keep it if the product is not equal to productName
    this.products = this.products.filter(p => p !== productName)
  }

}
