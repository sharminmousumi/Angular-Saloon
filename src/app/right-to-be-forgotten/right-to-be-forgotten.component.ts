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
  
  
  

  forgetButton(){
    this.forgetEmit.emit();
    
    
  }

  constructor(public LocalStorageService:LocalStorageService) { }
  
  ngOnInit(): void {
    
  }

}
