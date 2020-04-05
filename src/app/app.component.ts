import { Component } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Drink } from './drink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  SelectBeverageList: Drink[];
  title = 'Lab1-saloon';
  showforget:boolean;
  showforgetMessage:boolean;
  inputForm:boolean;
  showChangeForm:boolean;
  showBeverage:boolean;
  
  



  constructor(public LocalStorageService:LocalStorageService) { }

  ngOnInit(): void {
    
  }
  
  //Delete data function
  controlEmit(){
    this.LocalStorageService.deleteData();
    this.showforget=false;
    this.inputForm=true;
    this.showBeverage=false;
    this.showChangeForm=false;
    this.showforgetMessage=true;
  }
  
}
