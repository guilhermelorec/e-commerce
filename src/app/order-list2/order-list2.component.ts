import { Component } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { ITabelaShow } from './tabela2.types';
import { Tabela2Service } from './tabela2.service';

@Component({
  selector: 'app-order-list2',
  standalone: true,
  imports: [DataViewModule, ButtonModule, TagModule, CommonModule],
  templateUrl: './order-list2.component.html',
  styleUrl: './order-list2.component.scss'
})
export class OrderList2Component {

  orderList2: ITabelaShow[] = []

  constructor(private tabela2Service: Tabela2Service) {}

  ngOnInit() {

    this.tabela2Service.popularTabela().subscribe(data =>{
      this.orderList2 = data;
      console.log(this.orderList2)
    })
  }
}

