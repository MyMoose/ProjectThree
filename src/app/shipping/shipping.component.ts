import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css',
})
export class ShippingComponent implements OnInit {
  shippingCosts!: Observable<{ type: string; price: number }[]>;

  constructor(private _cartService: CartService) {}

  ngOnInit(): void {
    this.shippingCosts = this._cartService.getShippingPrices();
  }
}
