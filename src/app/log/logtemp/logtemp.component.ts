import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logtemp',
  templateUrl: './logtemp.component.html',
  styleUrls: ['./logtemp.component.scss']
})
export class LogtempComponent implements OnInit {

  person = {'user':'root','password':'root'};
  loginValidators!: FormGroup;


  /* username: FormControl = new FormControl('',[Validators.required]);
  userpassword: FormControl = new FormControl('',[Validators.required]); */

  

  myFromBuilder():FormGroup{
    return this.fb.group({
      userna: ['',[Validators.required]],
      passlog: ['',[Validators.required]]
  })
  }

  confir2(){
    this.loginValidators.value[0]
  }
  confirmation(user:string,pass:string){
    if (this.person.user != user || this.person.password != pass) {
      return alert('Error de credenciales');}
    this.Router.navigateByUrl('/main');
  }

  constructor(private Router:Router, private readonly fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginValidators = this.myFromBuilder();
    console.log('login started');
  }
  ngOnDestroy():void {
    console.log('login ended');
  }

}
