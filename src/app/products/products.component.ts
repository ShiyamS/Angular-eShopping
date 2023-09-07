import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
products =  [
  {
    id: 1,
    name: "Product 1",
    price: 10.99,
    color: "red",
    available: 'Available',
    image: "https://picsum.photos/200",
  },
  {
    id: 2,
    name: "Product 2",
    price: 19.99,
    color: "blue",
    available: 'Not available',
    image: "https://picsum.photos/200",
  },
  {
    id: 3,
    name: "Product 3",
    price: 7.99,
    color: "green",
    available: 'Available',
    image: "https://picsum.photos/200",
  },
  {
    id: 4,
    name: "Product 4",
    price: 14.99,
    color: "yellow",
    available: 'Available',
    image: "https://picsum.photos/200",
  },
  {
    id: 5,
    name: "Product 5",
    price: 5.99,
    color: "orange",
    available:'Not available',
    image: "https://picsum.photos/200",
  },
  {
    id: 6,
    name: "Product 6",
    price: 9.99,
    color: "purple",
    available: 'Available',
    image: "https://picsum.photos/200",
  },
];

}
