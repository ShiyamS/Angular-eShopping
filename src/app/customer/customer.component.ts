import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  selectedCustomer: any;

  customers: Customer[] = [
    {
      customerNo: 1,
      name: "Test User 1",
      address: "Address test 1",
      city: "City Test 1",
      country: 'Country test 1',
    },
    {
      customerNo: 2,
      name: "Test User 2",
      address: "Address test 2",
      city: "City Test 2",
      country: 'Country test 2',
    },
    {
      customerNo: 3,
      name: "Test User 3",
      address: "Address test 3",
      city: "City Test 3",
      country: 'Country test 3',
    },
    {
      customerNo: 4,
      name: "Test User 4",
      address: "Address test 4",
      city: "City Test 4",
      country: 'Country test 4',
    },
    {
      customerNo: 5,
      name: "Test User 5",
      address: "Address test 5",
      city: "City Test 5",
      country: 'Country test 5',
    }
  ]

}
