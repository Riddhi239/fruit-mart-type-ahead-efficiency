import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { debounceTime, fromEvent, map } from "rxjs";


// import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  @ViewChild('inputData') inputData : ElementRef;
  title = 'application';
  fruits = ["Abiu","Acai","Acerola","Ackee","African cucumber","Apple","Apricot","Avocado","Banana","Bilberry","Blackberry","Blackcurry"]
  searched_fruit: any=[];
  rxjsFilterCountBox:number=0;
  ngOnInit(): void{

  }
  ngAfterViewInit(): void{
    const input= fromEvent<any>(this.inputData.nativeElement,'keyup').pipe(map(e=>e.target.value),debounceTime(1000));
    input.subscribe(val=>{
      this.rxjsFilterCountBox++;
      this.searched_fruit=[];
    for(var i=0;i<this.fruits.length;i++){
      if(this.fruits[i].startsWith(val)){

        this.searched_fruit.push(this.fruits[i]);
      }
    }
    })
  }
}
