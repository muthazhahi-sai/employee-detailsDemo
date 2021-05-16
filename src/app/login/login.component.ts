import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formdata;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      uname: new FormControl("", Validators.compose([
         Validators.required,
         Validators.minLength(6)
      ])),
      passwd: new FormControl("", this.passwordvalidation)
   });
  }
  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
       return {"passwd" : true};
    }
 }
 onClickSubmit(data) {
    console.log(data.uname);
    if (data.uname == "systemadmin" && data.passwd == "admin123") {
      localStorage.setItem('uname',data.uname);
      //  alert("Login Successful");
       this.router.navigate(['/employee'])
    }
 }
  

}
