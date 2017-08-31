import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, Router } from '@angular/router';
import { appRoutes } from '../router/router.component';
import { EmpService } from '../service/emp.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  aboutId: string;
  heroes: Array<any>;

  // constructor(private appRoutes: ActivatedRoute) {
  constructor(private service: EmpService, private appRoutes: ActivatedRoute,private router: Router) {
    // if we get id from route
    this.aboutId = appRoutes.snapshot.params['id'];
    console.log("this.aboutId",this.aboutId);
    this.heroes=service.getList();
   
   }

   onSelect(hero) {
    this.router.navigate(['/about', hero.id]);
   }

  ngOnInit() {
    console.log("this.aboutId",this.aboutId);
  }

}
