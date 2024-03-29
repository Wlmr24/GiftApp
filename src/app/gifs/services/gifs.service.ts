import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchGifsResponse, gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apikey : string = 'y4lCG2n9ufD2djBWhaLIiqz6uKsd90uR';
  private _historial:string[] = [];
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  public resultados: gif[] = [];
  get historial() {

    return [...this._historial];
  }

  constructor (private http: HttpClient) {

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];

    // localStorage.getItem('historial');

    // if(localStorage.getItem('historial')) {
    //   this._historial = JSON.parse (localStorage.getItem('historial')!);
    // }
  }

  buscarGifs (query:string = '') {

    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes(query)) {
    this._historial.unshift(query);
    }
    this._historial = this._historial.splice(0,10);

    localStorage.setItem('historial', JSON.stringify(this._historial) );

    console.log(this._historial);

    const params = new HttpParams()
      .set('api_key', this.apikey)
      .set('limit','10')
      .set('q', query);


    this.http.get<SearchGifsResponse>(`${ this.servicioUrl } /search`, {params})
    .subscribe((resp) => {
      console.log(resp.data);
      this.resultados = resp.data;
      localStorage.setItem('resultados', JSON.stringify(this.resultados) );
    })
  }
}
