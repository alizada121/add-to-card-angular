import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList:any=[]
  public productList=new BehaviorSubject<any>([])

  constructor() { }

  getProducts(){
      return this.productList.asObservable();
  }

  setProduct(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product)
  }

  addToCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList)
    console.log(this.cartItemList)
  }
  removeCartItem(product:any){

    this.cartItemList.map((a:any, index:any)=>{
        if(product.id===a.id){
          this.cartItemList.splice(index,1)
        }
    })
  }

  removeAllCart(){
    this.cartItemList=[]
    this.productList.next(this.cartItemList)
  }
}
