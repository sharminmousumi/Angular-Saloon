import { Component,Input, OnInit, Output,EventEmitter } from '@angular/core';
import { LocalStorageService} from '../local-storage.service';

@Component({
  selector: 'app-right-to-be-forgotten',
  templateUrl: './right-to-be-forgotten.component.html',
  styleUrls: ['./right-to-be-forgotten.component.css']
})
export class RightToBeForgottenComponent implements OnInit {
  @Input() showforget:boolean;
  @Output() forgetEmit= new EventEmitter();
  @Input() showforgetMessage:boolean;
  GotIt:string;
  

  forgetButton(){
    this.forgetEmit.emit();
    this.GotIt="Got it. Who are you again?";
    
  }

  constructor(public LocalStorageService:LocalStorageService) { }
  
  ngOnInit(): void {
    this.showforget=true;
  }

}
