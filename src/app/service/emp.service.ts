import { Injectable } from '@angular/core';

interface User {
  id: number;
  name: string;
  cell?: string;
}

// ? called as let's or safe guard. this indicates optional params in object

@Injectable()
export class EmpService {

  constructor() { }

  getList() {
     let users: User[] = [{
      "id": 1,
      "name": "emp 1"
    },
    {
      "id": 2,
      "name": "emp 2"
    },
    {
      "id": 3,
      "name": "emp 3"
    },
    {
      "id": 4,
      "name": "emp 4"
    }];
    return users;

  }

}
