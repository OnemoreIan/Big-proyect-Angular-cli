import { Component, OnInit } from '@angular/core';
import { contenido_temp } from './data-content-temp';

@Component({
  selector: 'app-content-temp',
  templateUrl: './content-temp.component.html',
  styleUrls: ['./content-temp.component.scss']
})
export class ContentTempComponent implements OnInit {

  content = contenido_temp;
  abrir!:boolean;

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
