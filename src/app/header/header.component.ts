import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  slogan:string = 'Your one stop shop for everything';
  homePageImage:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWA0rNcBEQQqJmz7SHWTyJDrgquUZc5N8Ekw&usqp=CAU"
  ngOnInit(): void {

  }

  getSlogan():string{
    return "This is the new slogan for this application"
  }


}
