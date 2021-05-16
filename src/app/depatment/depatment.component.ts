import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depatment',
  templateUrl: './depatment.component.html',
  styleUrls: ['./depatment.component.scss']
})
export class DepatmentComponent implements OnInit {

  collapsed = true;
  uname:any;
  department:any
  isMasterSel:boolean;
  categoryList:any;
  checkedCategoryList:any;
  listes: any[];

  checkboxselectlist: any[] = [];
  constructor(private router: Router) { 
    this.isMasterSel = false;
    this.department = [
      { id: 1, 'departmentname': 'CSE'},
      { id: 2, 'departmentname': 'EEE'},   
      { id: 3, 'departmentname': 'ECE'},
      { id: 3, 'departmentname': 'MECH'},
     
    ];
  }
  list1: any[] = [];
  filterResults(obj: any, e: any, i: any) {
    if (e.currentTarget.checked == true) {
      this.list1.push(obj);
    }
    if (e.currentTarget.checked == false) {
      this.list1.splice(obj, 1);
    }
    console.log(this.checkboxselectlist);
  }



  ngOnInit(): void {
   this.uname= localStorage.getItem('uname')
   
  }
  
}
