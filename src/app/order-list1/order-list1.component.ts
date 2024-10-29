import { Component } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { ITabelaShow } from './tabela1.types';
import { Tabela1Service } from './tabela1.service';

@Component({
  selector: 'app-order-list1',
  standalone: true,
  imports: [DataViewModule, ButtonModule, TagModule, CommonModule],
  templateUrl: './order-list1.component.html',
  styleUrl: './order-list1.component.scss'
})
export class OrderList1Component {

  orderList1: ITabelaShow[] = []

  constructor(private tabela1Service: Tabela1Service) {}

  ngOnInit() {

    this.tabela1Service.popularTabela().subscribe(data =>{
      this.orderList1 = data;
      console.log(this.orderList1)
    })
  }
}

