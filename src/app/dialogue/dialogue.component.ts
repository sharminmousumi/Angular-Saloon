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
  @Input() HowdyText:boolean;
  @Input() inputForm:boolean;
  @Input() showChangeForm:boolean;
  showUsual:boolean;
  HowdyMessage:string;
  showBeverage:boolean;
  
  
  FirstNameValue:any;
  LastNameValue:any;
  showFirstNameAndWelcomeMessage:string;
  ChangeNameValue:string;
  showJustChangeForm:boolean;
  @Input() showforgetMessage:boolean=true;
 @Output() FirstLastEmit= new EventEmitter();
  
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
  //submit button save the value and hide the input button and message 
  StoreFirstLastName(){
  this.FirstLastEmit.emit();
   this.showFirstNameAndWelcomeMessage="Alright " + this.FirstNameValue + " what can I do you for?";
   this.HowdyText=false;
   this.inputForm=false;
   this.showChangeForm=true;
   this.showUsual=true;
   this.showJustChangeForm=true;
   this.showforgetMessage=false;
   
   
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
     
      
      
    }
   

  constructor(public LocalStorageService : LocalStorageService) { }

  ngOnInit(): void {
    this.FirstNameValue=this.LocalStorageService.retriveFirstName();
    //this.HowdyText=true;
    
    
      if(this.FirstNameValue){
       // alert(this.FirstNameValue);
        this.showFirstNameAndWelcomeMessage="Hello Again   " + this.FirstNameValue+"  The usual?";
        this.showJustChangeForm=true;
        this.inputForm=false;
        this.HowdyText=false;
        this.showChangeForm=true;
        this.showUsual=true;
        this.showBeverage=true;
        
        
        
      }else{
        
        this.HowdyText=true;
        this.inputForm=true;
        this.showJustChangeForm=false;
        this.showChangeForm=false;
      }
      
   
  
}

}
