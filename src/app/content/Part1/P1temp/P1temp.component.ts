import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p1temp',
  templateUrl: './p1temp.component.html',
  styleUrls: ['./p1temp.component.scss']
})
export class P1tempComponent implements OnInit {

  abrir!:boolean
  name_topics = ['Topic1','Topic2','Topic3','Topic4','Topic5','Topic6'];

  etiquetas = ['<p1t2></p1t2>'];
  despliegue(){
    if (this.abrir != true) {
      this.abrir = true;
    } else {
      this.abrir = false;
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
