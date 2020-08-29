import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product-home/product/product.component';
import {EventComponent} from './event-home/event/event.component';
import {ServiceComponent} from './service-home/service/service.component';
import {ProductCreateComponent} from './product-home/product-create/product-create.component';
import {ProductUpdateComponent} from './product-home/product-update/product-update.component';
import {EventCreateComponent} from './event-home/event-create/event-create.component';
import {EventUpdateComponent} from './event-home/event-update/event-update.component';
import {ServiceCreateComponent} from './service-home/service-create/service-create.component';
import {ServiceUpdateComponent} from './service-home/service-update/service-update.component';
import {UserComponent} from './user-home/user/user.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/create', component: ProductCreateComponent },
  { path: 'product/update/:id', component: ProductUpdateComponent },
  { path: 'event', component: EventComponent },
  { path: 'event/create', component: EventCreateComponent },
  { path: 'event/update/:id', component: EventUpdateComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'service/create', component: ServiceCreateComponent },
  { path: 'service/update/:id', component: ServiceUpdateComponent },
  { path: 'user', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
