import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  // sayHello(inputEl:HTMLInputElement ){
  //   alert("Hello," + inputEl.value )
  //   console.log(inputEl);
  // }

  sayHello() {
    console.log("Hello From Demo Component !")
    alert("Hello From Demo Component !")
  }



}
