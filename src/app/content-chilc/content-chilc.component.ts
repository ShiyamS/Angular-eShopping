import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-chilc',
  templateUrl: './content-chilc.component.html',
  styleUrls: ['./content-chilc.component.css']
})
export class ContentChilcComponent implements OnInit, AfterContentInit {
  @ContentChild('paragraph') paragraphEl!: ElementRef;

  ngOnInit(): void {
    console.log("ContentChild Value in ngOnInit: ", this.paragraphEl);
  }

  ngAfterContentInit() {
    this.paragraphEl.nativeElement.textContent = "This is para 2"
    console.log("ContentChild Value in ngAfterContentInit : ", this.paragraphEl);
  }


}
