import { EventEmitter } from "@angular/core"
declare interface UsersData {
  name: string;
  job: string;
  gender: string;
  country: string;
  age: number;
  avatar: string;
}
export class UsersService {
  users = [
    { name: 'John', job: 'Teacher', gender: 'Male', country: 'unitedStates', age: 35, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&w=1000&q=80' },
    { name: 'Mark', job: 'Designer', gender: 'Male', country: 'unitedStates', age: 35, avatar: 'https://media.istockphoto.com/id/1399366111/photo/handsome-young-mixed-race-man-smiling-and-happy-while-standing-in-studio-isolated-against-a.webp?b=1&s=170667a&w=0&k=20&c=odwoJctbPxx-EcHHK7E3ih0yjCW1tG-W1LyYqgCaILc=' },
    { name: 'Mary', job: 'Lawyer', gender: 'Female', country: 'unitedStates', age: 35, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQquDTt_XzP1TYalBhD7i2fOdndWQGJZf5Cdw&usqp=CAU' },
    { name: 'Steve', job: 'Doctor', gender: 'Female', country: 'unitedStates', age: 35, avatar: 'https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg' },
  ]


  ShowUserDetail: EventEmitter<UsersData> = new EventEmitter<UsersData>();

  getUserDetails(user: UsersData) {
    this.ShowUserDetail.emit(user);
  }

}
