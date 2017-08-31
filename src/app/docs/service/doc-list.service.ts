import { Injectable } from '@angular/core';

interface User {
  id: number;
  name: string;
  project?: string;
}

@Injectable()
export class DocListService {
  
  // userlist: any;
  // console.log("userlist",his.userlist);
  // recvdata: any;

  private userData$ = [];

  getData() {
    // if(this.userData$.length){
    //   this.userData$.forEach(element => {
    //    console.log("element recvdata",element,this.recvdata); 
    //     if(this.recvdata.name===element.name){
    //       this.userlist=element.name;
    //     }     
    //   });
    // }
    
    // else
     return this.userData$;
  }

  updateData(data) {
    // this.recvdata = data;
    this.userData$.push(data);
  }

}
