import { Component, OnInit } from '@angular/core';
import { ImagenesService } from '../imagenes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  ngOnInit(): void {
  }

  //constructor (private ImagenesService: ImagenesService){}

/*buscar (buscar: string){
  // console.log(buscar);
  this.ImagenesService.buscarImagenes(buscar);
}
*/
}
