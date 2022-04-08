import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { imagenes, SearchImagenesResponse } from './interface/imagenes.interface';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  

  private apiKey: string ='CWpv8H1i8N21zSHGqcBKEzhed6h55yNH';
  private _historial: string []= [];
  public resultados: imagenes[] = [];

  get historial(){
    return [...this._historial];
  }

  constructor (private http: HttpClient){
      //localStorage.getItem('historial');

      if (localStorage.getItem('historial')){
        this._historial = JSON.parse(localStorage.getItem('historial')!);
      }

  }


   buscarImagenes(query: string ='' ){
    this._historial.unshift( query );
    //console.log(this._historial);
      localStorage.setItem('historial',JSON.stringify(this._historial));
    
    this.http.get<SearchImagenesResponse>(`https://api.giphy.com/v1/gifs/search?api_key=CWpv8H1i8N21zSHGqcBKEzhed6h55yNH&q=${ query }&limit=10`)
    .subscribe( (resp )  => {
      console.log(resp.data);
      this.resultados = resp.data;

    });

    

  }

  

}
