import { Component, OnInit } from '@angular/core';
import { GiftsService } from '../../core/data-services/gifts/gifts.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private readonly giftsService:GiftsService
  ) { }

  public get historial(){
    return this.giftsService.historial;
  }

  ngOnInit(): void {
  }

  public buscar = (termino:string) => {

    if(termino===''){
      return;
    }
    this.giftsService.buscarGift(termino);

  }

}
