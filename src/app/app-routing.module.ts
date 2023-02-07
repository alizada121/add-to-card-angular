import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './comp/card/card.component';
import { ProductsComponent } from './comp/products/products.component';

const routes: Routes = [
  {path:"products", component:ProductsComponent},
  {path:"cart",component:CardComponent},
  {path:'', redirectTo:'products', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
