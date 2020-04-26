import { Component, Input } from '@angular/core';
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
  showforgetMessage:boolean;
  inputForm:boolean;
  showChangeForm:boolean;
  HowdyText:boolean=true;
  showforget:boolean=true;
  showBeverage:boolean;

  constructor(public LocalStorageService:LocalStorageService) { }

  ngOnInit(): void {
    
    
  }
  
  //Delete data and return to the begining
  controlEmit(){
    this.LocalStorageService.deleteData();
    this.inputForm=true;
    this.showChangeForm=false;
    this.showforgetMessage=true;
    this.showBeverage=false;
    
  }
  FirstLastEmitControl(){
    this.LocalStorageService.getBeverage();
    this.showBeverage=true;
  }
  
}
