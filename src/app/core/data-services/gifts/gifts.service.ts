import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGiftResponse,Gif } from '../../interfaces/gift.interface';

@Injectable({
  providedIn: 'root'
})
export class GiftsService {


  private apiKey='uCD2Dw32dCco3R6gMOOKvNrUoucarPBA';
  private urlApi:string='https://api.giphy.com/v1/gifs';
  private limitApi:number=20;

  private _historial:string[]=[];
  public results:Gif[]=[];



  constructor(private readonly http: HttpClient) { 

   // this._historial=JSON.parse(localStorage.getItem('Historial_AppGift')!)||[];
    //this.results=JSON.parse(localStorage.getItem('resultado_AppGift')!)||[];

    if(localStorage.getItem('historial_AppGift')){
     this._historial=JSON.parse(localStorage.getItem('historial_AppGift')!);
    }
    if(localStorage.getItem('resultado_AppGift')){
      this.results=JSON.parse(localStorage.getItem('resultado_AppGift')!);
     }

  }



  get historial(){
    return [...this._historial];
  }

  public buscarGift(query:string){
    query=query.toLocaleLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial=this._historial.splice(0,10);

      localStorage.setItem('historial_AppGift',JSON.stringify(this._historial));
    }
    const params=new HttpParams()
      .set('api_key',this.apiKey)
      .set('q',query)
      .set('limit',this.limitApi.toString())
    
    this.http.get<SearchGiftResponse>(`${this.urlApi}/search`,{params})
      .subscribe((resp)=>{
        this.results=resp.data;
        localStorage.setItem('resultado_AppGift',JSON.stringify(this.results));
      });


  }



}
