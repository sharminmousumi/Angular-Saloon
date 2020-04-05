import { Injectable } from '@angular/core';
import { Drink } from './drink';

  
 

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  //FirstName store to the local storage
  localStorageFirstName(FirstName){
    localStorage.setItem('FirstName', FirstName);
  }
//LastName store to the local storage
  localStorageLastName(LastName){
  localStorage.setItem('LastName', LastName);
  }
  //change first name save store to the local storage
  localStorageChangeName(FirstName){
    localStorage.setItem('FirstName', FirstName);
  }
 
  getFirstName(){
    return localStorage.getItem('FirstName');
  }
  //select beverage list
  SelectBeverageList: Drink[]=[
    { name:'Coca-cola'},{ name:'Fanta'},{ name:'sprite'},{ name:'Cola-Zero'},{ name:'Tea'},{ name:'Coffee'},
  ]
  //set and get to the beverage List
  getBeverage(): Drink[]{
    localStorage.setItem("drinksName", JSON.stringify(this.SelectBeverageList) );
    return JSON.parse(localStorage.getItem("drinksName"));
  } 
  //save seltected beverage 
  storeBeverage(data){
    localStorage.setItem('BeverageName', data);
  }
  //get selected beverage
  getstoreBeverage(){
    return localStorage.getItem('BeverageName');  
  }
  //save choose beverage
  StoreChooseBeverage(inputValue){
    localStorage.setItem('BeverageName', inputValue);
  }
  // remove all localstorage data
  deleteData(){
    localStorage.removeItem("drinksName");
    localStorage.removeItem("BeverageName");
    localStorage.removeItem("FirstName");
    localStorage.removeItem("LastName");
    
  }
 

  constructor() { }
}
