import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  collapsed = true;
  uname:any;
  employees:any
  isMasterSel:boolean;
  categoryList:any;
  checkedCategoryList:any;
  constructor(private router: Router) { 
    this.isMasterSel = false;
    this.employees = [
      { id: 1, 'fname': 'Abhishek'},
      { id: 2, 'fname': 'Shiva'},   
      { id: 3, 'fname': 'Manoj'},
      { id: 4, 'fname': 'Muthu'},
      { id: 5, 'fname': 'Priya'},
      { id: 6, 'fname': 'Abdul'}
    ];
    
    // this.getCheckedItemList();
  }
  listes: any[];

  checkboxselectlist: any[] = [];
  ngOnInit(): void {
   this.uname= localStorage.getItem('uname')
 
  }
  
  list1: any[] = [];
  filterResults(obj: any, e: any, i: any) {
    // this.list1.push(obj)
    if (e.currentTarget.checked == true) {
      // this.checkboxselectlist.push(obj.id);
      this.list1.push(obj);
    }
    if (e.currentTarget.checked == false) {
      // this.checkboxselectlist.push(obj.id);
      this.list1.splice(obj, 1);
    }
    console.log(this.checkboxselectlist);
  }





  //  checkUncheckAll() {
  //   for (var i = 0; i < this.employees.length; i++) {
  //     this.employees[i].isSelected = this.isMasterSel;
  //     console.log("checked lemens: ", this.employees[i].isSelected);
  //   }
    
  //   this.getCheckedItemList();
  // }
   
  // isAllSelected() {
  //   this.isMasterSel = this.employees.every(function(item:any) {
  //       return item.isSelected == true;
  //     })
  //   this.getCheckedItemList();
  // }
  
  // getCheckedItemList(){
  //   this.checkedCategoryList = [];
  //   for (var i = 0; i < this.employees.length; i++) {
  //     this.checkedCategoryList.push(this.employees[i]);
  //   }
  //   this.checkedCategoryList = JSON.stringify(this.checkedCategoryList);
  //   // console.log("Selected item Id: ",  (this.checkedCategoryList));
  // //  this.onSelect()
  // }
  // selectedHero:any;
  // selectedHero1:any;
  // onSelect(selectedItem: any) {
  //   this.selectedHero = selectedItem;
  //   // this.selectedHero1 = ;
  //   console.log("Selected item Id: ", selectedItem.Id);
  // }
}
