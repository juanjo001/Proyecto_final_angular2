import { Component, ElementRef, ViewChild } from '@angular/core';
import { ImagenesService } from '../imagenes.service';



@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent   {

  @ViewChild('txtbuscar') txtbuscar!:ElementRef<HTMLInputElement>;

  constructor( private ImagenesService:ImagenesService){}

  buscar(){
    //console.log(this.txtbuscar);
    const valor = this.txtbuscar.nativeElement.value;
    
    this.ImagenesService.buscarImagenes(valor);

    this.txtbuscar.nativeElement.value='';
  }

}
