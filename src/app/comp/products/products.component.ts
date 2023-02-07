import { Component,OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList:any;
  constructor(private api:ApiService, private cartService:CartService){

  }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList=res;
    })

 
  }

  addToCart(item:any){
    this.cartService.addToCart(item)
    console.log(item)
  }

}
