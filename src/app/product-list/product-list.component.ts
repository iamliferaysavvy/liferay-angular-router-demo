import { Product } from "../models/product";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "product-list",
  templateUrl: "/o/angular-router-demo/app/product-list/product-list.component.html"
})
export class ProductListComponent implements OnInit {
  public products: Product[] = [
    new Product(1, "Product 001"),
    new Product(2, "Product 002"),
    new Product(3, "Product 003"),
    new Product(4, "Product 004"),
    new Product(5, "Product 005"),
    new Product(6, "Product 006"),
    new Product(7, "Product 007"),
    new Product(8, "Product 008")
  ];
  constructor(private router: Router){}
  ngOnInit() {}
		public gotoProductDetails(url, id) {
			this.router.navigate([url, id]).then( (e) => {
			  if (e) {
				console.log("Navigation is successful!");
			  } else {
				console.log("Navigation has failed!");
			  }
			});
		}
		
		public gotoProductDetailsV2(url, id) {

			var myurl = '${url}/${id}';
			this.router.navigateByUrl(myurl).then(e => {
			  if (e) {
				console.log("Navigation is successful!");
			  } else {
				console.log("Navigation has failed!");
			  }
			});
		 }
}
