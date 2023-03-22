import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { contenido_temp } from './data-content-temp';

@Component({
  selector: 'app-content-temp',
  templateUrl: './content-temp.component.html',
  styleUrls: ['./content-temp.component.scss']
})
export class ContentTempComponent implements OnInit {

  temario1 = [
    'Como instalar',
    'Carpetas en angular',
    'Que es un componente en angular',
    'Interpolacion',
    'Enlace bidireccional'
  ]

  //nombres de enlaces
  easy1!:number;
  easy2!:number;
  medium1!:number;
  medium2!:number;
  hard1!:number;
  hard2!:number;

  dificultad = [this.easy1,this.easy2,this.medium1,this.medium2,this.hard1,this.hard2];

  //depliqgue de contenido

  content = contenido_temp;

  despliegue(nom:number){
    console.log('ejecutando\n\n'+nom)
    if (nom != 1) {
      nom = 1;
      console.log('si no\n\n'+nom)
    } else {
      nom = 0;
      console.log('entonces\n\n'+nom)
    }
  }


  direccion(){
    this.routing.navigateByUrl('/part1')
  }

  constructor(private routing:Router) { }

  ngOnInit(): void {
  }



}
