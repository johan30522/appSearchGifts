import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GiftsService } from '../../../core/data-services/gifts/gifts.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

@ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(
    private readonly giftsService:GiftsService
  ) { }

  ngOnInit(): void {
  }
  public buscar = (termino:string) => {
    if(this.txtBuscar.nativeElement.value===''){
      return;
    }
    this.giftsService.buscarGift(this.txtBuscar.nativeElement.value);
    this.txtBuscar.nativeElement.value=''; 
  }
}
