import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  items = this.cartService.getItems();

  constructor(private cartService: CartService, private router: Router) {}

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.router.navigate(['confirmation']);
  }
}
