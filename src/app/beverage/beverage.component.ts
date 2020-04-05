import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Drink } from '../drink';



@Component({
  selector: 'app-beverage',
  templateUrl: './beverage.component.html',
  styleUrls: ['./beverage.component.css']
})
export class BeverageComponent implements OnInit {
  SelectBeverageList: Drink[];
  showSelectedBeverage:string;
  BeverageName:string;
  inputValue:string='';
  @Input() showBeverage:boolean;
  
  
  
  
//add the item of the Beverage 
  addBeverage(list:string){
   this.BeverageName=list;
   this.showSelectedBeverage= "One " + this.BeverageName+"  coming right up!";
   this.LocalStorageService.storeBeverage(this.BeverageName);    
  }
  inputButtonmyChoice(event){
    this.inputValue = event.target.value;
  }
  myChooseButton(){
    this.LocalStorageService.StoreChooseBeverage(this.inputValue);
  this.showSelectedBeverage= "One " + this.inputValue+"  coming right up!";   
  }
  
	
  constructor(public  LocalStorageService: LocalStorageService ) { }

  ngOnInit(): void {
  this.SelectBeverageList=this.LocalStorageService.getBeverage();
this.showBeverage=false;
  }

}
