import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchedValue :string = '';

  // changeSerchValue(eventData:Event){
  //   this.searchValue = (<HTMLInputElement>eventData.target).value;
  // }

  @Output() searchedText: EventEmitter<string> = new EventEmitter<string>();


  onSearchTextChanges(){
    this.searchedText.emit(this.searchedValue);
  }

}
