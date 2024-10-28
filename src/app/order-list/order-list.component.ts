import { Component } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { ITabelaShow } from './tabela.types';
import { TabelaService } from './tabela.service';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [DataViewModule, ButtonModule, TagModule, CommonModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss'
})
export class OrderListComponent {

  orderList: ITabelaShow[] = []

  constructor(private tabelaService: TabelaService) {}

  ngOnInit() {

    this.tabelaService.popularTabela().subscribe(data =>{
      this.orderList = data;
      console.log(this.orderList)
    })
  }
}
