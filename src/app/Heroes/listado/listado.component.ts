import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {


  heroes: string[]=['Goku','Naruto','Gojan','Superman','vegueta']

  heroeBorrado:string[]=[];

  ngOnInit(): void {
  }

  onborrar(){
    //this.heroes=[];

    let   borrado  =  this.heroes.shift() || '';
    this.heroeBorrado.push(borrado);
 

}

}
