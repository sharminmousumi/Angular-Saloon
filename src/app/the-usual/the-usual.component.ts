import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';


@Component({
  selector: 'app-the-usual',
  templateUrl: './the-usual.component.html',
  styleUrls: ['./the-usual.component.css']
})
export class TheUsualComponent implements OnInit {
  showSaveFirstNameAndBeverage:string;
  FirstNameValue:string;
  @Input() showUsual:boolean=true;
  @Output() sendUsual=new EventEmitter();
  usualDatapassing:string;

  usualReturnData(){
    this.usualDatapassing=this.LocalStorageService.getstoreBeverage();
    this.sendUsual.emit(this.usualDatapassing);
    
  }
  constructor( public LocalStorageService:LocalStorageService) { }

  ngOnInit(): void {
   
  }

}
