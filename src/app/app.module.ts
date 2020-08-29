import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product-home/product/product.component';
import { ServiceComponent } from './service-home/service/service.component';
import { EventComponent } from './event-home/event/event.component';
import { EventCreateComponent } from './event-home/event-create/event-create.component';
import { EventUpdateComponent } from './event-home/event-update/event-update.component';
import { ProductCreateComponent } from './product-home/product-create/product-create.component';
import { ProductUpdateComponent } from './product-home/product-update/product-update.component';
import { ServiceCreateComponent } from './service-home/service-create/service-create.component';
import { ServiceUpdateComponent } from './service-home/service-update/service-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { UserComponent } from './user-home/user/user.component';
import { SubComponent } from './sub-home/sub/sub.component';
import { SubCreateComponent } from './sub-home/sub-create/sub-create.component';
import { SubUpdateComponent } from './sub-home/sub-update/sub-update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductComponent,
    ServiceComponent,
    EventComponent,
    EventCreateComponent,
    EventUpdateComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    ServiceCreateComponent,
    ServiceUpdateComponent,
    UserComponent,
    SubComponent,
    SubCreateComponent,
    SubUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatListModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
