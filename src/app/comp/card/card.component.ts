import { Component ,OnInit} from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public products:any=[];
 

  constructor(private cartService:CartService){}

      ngOnInit(): void {
        this.cartService.getProducts()
        .subscribe(res=>{
          this.products=res
  
        })
      }


      removeItem(product:any){
        this.cartService.removeCartItem(product)

      }

      removeAllItem(){
        this.cartService.removeAllCart()
      }
}
