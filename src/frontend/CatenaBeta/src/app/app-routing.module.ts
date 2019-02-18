import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColonninaComponent } from './Colonnina/colonnina/colonnina.component';
import { ColonninaFormComponent } from './Colonnina/colonnina-form/colonnina-form.component';
import { ColonninaLettureComponent } from './ColonninaLetture/colonnina-letture/colonnina-letture.component';
import { ColonninaLettureFormComponent } from './ColonninaLetture/colonnina-letture-form/colonnina-letture-form.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { NeedAuthGuard } from './auth.guard/auth.guard.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

const routes: Routes = [
  // { path: "product/:id", component: ProductDetailComponent }
  // { path: 'products', component: ProductListComponent }
  { path: '', component: MainMenuComponent, canActivate: [NeedAuthGuard] },
  { path: 'main', component: MainMenuComponent, canActivate: [NeedAuthGuard] },
  { path: 'login', component: LoginFormComponent },
  {
    path: 'Colonnine', component: ColonninaComponent,
    children: [
      { path: '', component: ColonninaComponent },
      { path: 'add', component: ColonninaFormComponent },
    ]
  },
  {
    path: 'ColonnineLettureAdd', component: ColonninaLettureFormComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
