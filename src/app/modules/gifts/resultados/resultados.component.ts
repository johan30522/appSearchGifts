import { Component, OnInit } from '@angular/core';
import { GiftsService } from '../../../core/data-services/gifts/gifts.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  constructor(private readonly giftsService:GiftsService) { }

  ngOnInit(): void {
  }

  get resultados(){

    return this.giftsService.results;

  }

}
