import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

    @Input('total') all :number = 0;
    @Input() available: number = 0;
    @Input() notAvailable: number = 0;

    selectedRadioButton : string = 'all'

    @Output() selectedRadioButtonChange: EventEmitter<string> = new EventEmitter<string>();

    onRadioButtonChnage(){
      this.selectedRadioButtonChange.emit(this.selectedRadioButton)
      // console.log(this.selectedRadioButton,"Child");
    }

}
