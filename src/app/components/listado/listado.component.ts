import { Component } from '@angular/core';
import { ImagenesService } from '../imagenes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent   {

  get resultados(){
      return this.ImagenesService.resultados;
  }

  constructor( 
    private ImagenesService: ImagenesService ) { }



}
