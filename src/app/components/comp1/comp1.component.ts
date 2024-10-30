import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// تعريف واجهة تمثل الطلبات
interface Order {
  name: string;
  extra: string;
}

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  orders: Observable<Order>;

  constructor() {
   
    this.orders = from<Order[]>([
      { name: 'بيتزا', extra: 'جبنة إضافية' },
      { name: 'برجر', extra: 'بدون بصل' },
      { name: 'سلطة', extra: 'بدون طماطم' }
    ]);
  }

  ngOnInit(): void {
   
    const preparedOrders = this.orders.pipe(
      map(order => `تحضير ${order.name} مع ملاحظة: ${order.extra}`)
    );

 
    preparedOrders.subscribe(order => console.log(order));
  }
}
