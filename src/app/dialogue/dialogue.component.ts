import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Drink } from '../drink';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {
  SelectBeverageList: Drink[];
  @Input() HowdyText:boolean=true;
  @Input() inputForm:boolean;
  @Input() showChangeForm:boolean;
  showUsual:boolean;
  
  FirstNameValue:string;
  LastNameValue:string;
  showFirstNameAndWelcomeMessage:string;
  ChangeNameValue:string;
  showBeverage:boolean;
  showJustChangeForm:boolean;
  

  
//First name send to service 
  FirstName(event){
    this.FirstNameValue=event.target.value;
    this.LocalStorageService.localStorageFirstName(this.FirstNameValue);
    
  }
  //Last name send to service 
  LastName(event){
    this.LastNameValue=event.target.value;
    this.LocalStorageService.localStorageLastName(this.LastNameValue);
      }
  //this button save the value and hide the input button and message 
  StoreFirstLastName(){
   this.showFirstNameAndWelcomeMessage="Alright " + this.FirstNameValue + " what can I do you for?";
   this.HowdyText=false;
   this.inputForm=false;
   this.showChangeForm=true;
   this.showBeverage=true;
   this.showUsual=true;
   this.showJustChangeForm=true;
   
  }
  //send to the service 
  changeFirstName(event){
  this.ChangeNameValue=event.target.value;
  this.LocalStorageService.localStorageChangeName(this.ChangeNameValue);
  }
  //change button save the first name
  StoreChangeName(){
    this.showFirstNameAndWelcomeMessage="Alright " + this.ChangeNameValue + " what can I do you for?";
    
  }
    //receive  usual data from usual component
    getUsual(){
      this.showFirstNameAndWelcomeMessage="Hello Again   " + this.FirstNameValue+"  The usual?";
      this.showJustChangeForm=false;
    }

  constructor(public LocalStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.FirstNameValue=this.LocalStorageService.getFirstName();
    this.inputForm=true;
     
     
     
  }

}
