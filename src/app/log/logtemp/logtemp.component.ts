import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logtemp',
  templateUrl: './logtemp.component.html',
  styleUrls: ['./logtemp.component.scss']
})
export class LogtempComponent implements OnInit {

  person = {'user':'root','password':'root'};

  constructor(private Router:Router) { }

  confirmation(user:string,pass:string){
    if (this.person.user == user && this.person.password == pass) {
      this.Router.navigateByUrl('/main');
    } else {
      alert('Error de credenciales');
    }
    
  }

  ngOnInit(): void {
    console.log('login started');
  }
  ngOnDestroy():void {
    console.log('login destroy');
  }

}
