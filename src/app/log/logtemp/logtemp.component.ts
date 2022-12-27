import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logtemp',
  templateUrl: './logtemp.component.html',
  styleUrls: ['./logtemp.component.scss']
})
export class LogtempComponent implements OnInit {

  username: FormControl = new FormControl('',[Validators.required]);
  userpassword: FormControl = new FormControl('',[Validators.required]);

  person = {'user':'root','password':'root'};

  

  confirmation(user:string,pass:string){
    if (this.person.user == user && this.person.password == pass) {
      this.Router.navigateByUrl('/main');
    } else {
      alert('Error de credenciales');
    }
    
  }

  constructor(private Router:Router) { }

  ngOnInit(): void {
    console.log('login started');
  }
  ngOnDestroy():void {
    console.log('login destroy');
  }

}
