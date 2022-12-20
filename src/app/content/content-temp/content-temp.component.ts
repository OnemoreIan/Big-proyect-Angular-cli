import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  direccion(){
    this.routing.navigateByUrl('/part1')
  }

  constructor(private routing:Router) { }

  ngOnInit(): void {
  }

}
