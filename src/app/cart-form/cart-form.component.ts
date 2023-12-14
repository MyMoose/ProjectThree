import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrl: './cart-form.component.css',
})
export class CartFormComponent {
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  @Output() submit = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
