import { Component, OnInit } from '@angular/core';

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

  onAddProduct(){
    this.products.push(this.productName);
  }

  onRemoveProduct(productName: string){
    // on keep it if is not equal to productName
    this.products = this.products.filter(p => p !== productName)
  }

}
