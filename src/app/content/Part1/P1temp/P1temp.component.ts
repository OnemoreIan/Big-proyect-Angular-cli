import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p1temp',
  templateUrl: './P1temp.component.html',
  styleUrls: ['./P1temp.component.scss']
})
export class P1tempComponent implements OnInit {

  abrir!:boolean
  name_topics = ['Part 1 topic 1','Part 1 topic 2','Part 1 topic 3','Part 1 topic 4','Part 1 topic 5'];

  despliegue(){
    console.log('funcion despliegue ejecutada');
    if (this.abrir != true) {
      this.abrir = true;
    } else {
      this.abrir = false;
    }

  }
  despliegue2(val:boolean){
    if (val != true) {
      val = true;
    } else {
      val = false;
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
