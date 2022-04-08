import { Component, Input, EventEmitter, Output, OnInit,
AfterContentInit,AfterContentChecked, AfterViewInit, AfterViewChecked,
 OnDestroy} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit,
 AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
 OnDestroy{
  // setting alais for as img
 @Input('img') postImg = '';

 // creating a custom event
 @Output() imgSelected = new EventEmitter<string>();

 constructor() {
   console.log("constructor() is called");
 }

 ngOnInit(): void {
   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
   //Add 'implements OnInit' to the class.
   console.log("ngOnInit() is called");
 }

 ngOnChanges(): void {
   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
   //Add '${implements OnChanges}' to the class.
   console.log("ngOnChanges() is called");
 }

 ngDoCheck(): void {
   //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
   //Add 'implements DoCheck' to the class.
   console.log("ngDoCheck() is called");
 }

 ngAfterContentChecked() {
     console.log("ngAfterContentChecked() is called");
 }

 ngAfterContentInit(){
     console.log("ngAfterContentInit() is called");
 }

 ngAfterViewChecked() {
     console.log("ngAfterViewChecked() is called");
 }

 ngAfterViewInit() {
     console.log("ngAfterViewInit() is called");
 }

 ngOnDestroy(){
   //Called once, before the instance is destroyed.
   //Add 'implements OnDestroy' to the class.
   console.log("ngOnDestroy() is called");
 }
}
