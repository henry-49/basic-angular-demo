import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // input use to recieve data from outside
  @Input() productName: string;
  // output help to with listing from outside
  // output is use to parse our custom event to the outside
  @Output() productClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClicked(){
    this.productClicked.emit();
  }
}
