import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'onlineShop';
  hidelogin:boolean;
 hidepopup:boolean;
  constructor( private route:Router ) { }
  ngOnInit(): void {
 
  }
  model: any = {};
  register() {
    console.log(this.model);
    this.hidelogin=false;
    // this.hidepopup=true;
    // alert("SUCCESS!! : " +JSON.stringify(this.model));
    this.route.navigate(['/shopingcard']);
    // this.displayemail=form.value.email;
    // this.dispalayPsw=form.value.password;
}
submit() {
  this.hidelogin=true;
  // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  this.route.navigate(['/employee'])
}



}
