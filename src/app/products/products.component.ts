import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  courseCountRadioButton : string = 'all'
  searchedTextValue: string = ""
  noData:boolean = true;

products =  [
  {
    id: 1,
    name: "Angular",
    price: 10.99,
    color: "red",
    available: 'Available',
    image: "https://picsum.photos/200",
  },
  {
    id: 2,
    name: "React",
    price: 19.99,
    color: "blue",
    available: 'Not available',
    image: "https://picsum.photos/200",
  },
  {
    id: 3,
    name: "Javascript",
    price: 7.99,
    color: "green",
    available: 'Available',
    image: "https://picsum.photos/200",
  },
  {
    id: 4,
    name: "Angular",
    price: 14.99,
    color: "yellow",
    available: 'Available',
    image: "https://picsum.photos/200",
  },
  {
    id: 5,
    name: "Python",
    price: 5.99,
    color: "orange",
    available:'Not available',
    image: "https://picsum.photos/200",
  },
  {
    id: 6,
    name: "Java",
    price: 9.99,
    color: "purple",
    available: 'Available',
    image: "https://picsum.photos/200",
  },
];

getTotalProducts(){
  return this.products.length;
}

getAvailableProducts(){
  return this.products.filter(product => product.available === 'Available').length;
}

getNotAvailableProducts(){
  return this.products.filter(product => product.available === 'Not available').length;
}



onChangeRadioButtonValue(data :string){
  this.courseCountRadioButton = data;
  // console.log(this.courseCountRadioButton,'Parent');
}

getSearchedValue(searchedValue:string){
  this.searchedTextValue = searchedValue;
  console.log(this.searchedTextValue);
}

}
