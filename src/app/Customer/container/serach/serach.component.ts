import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.css']
})
export class SerachComponent {
  searchValue:string= ""; // for getting value from input 
  searched:string  = "";  // for showing it in searched paragraph (for using ngIf)

  // For Siblings Communication
  @Output() searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  onClick(event : any){
    this.searched = this.searchValue
    this.searchTextChange.emit(this.searched);
  }
}
