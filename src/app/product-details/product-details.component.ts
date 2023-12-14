import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private _route: ActivatedRoute,
    private _cartService: CartService,
    private _loginService: LoginService
  ) {}

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this._route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  addToCart(product: Product) {
    if (this._loginService.isLoggedIn()) {
      this._cartService.addToCart(product);
      window.alert('Your product has been added to the cart!');
    } else {
      window.alert('Please log in before adding items to the cart.');
    }
  }
}
