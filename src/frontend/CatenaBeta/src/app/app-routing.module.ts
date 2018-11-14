import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ColonninaFormComponent} from './Colonnina/colonnina-form/colonnina-form.component';
import {ColonninaComponent} from './Colonnina/colonnina/colonnina.component';

const routes: Routes = [
  // { path: "product/:id", component: ProductDetailComponent }
  // { path: 'products', component: ProductListComponent }
  { path: '', component: ColonninaFormComponent }
  ,{ path: 'Colonnine', component: ColonninaComponent,
  children: [
    { path: '',  component: ColonninaComponent},
    { path: 'add', component: ColonninaFormComponent }
  ]


}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
