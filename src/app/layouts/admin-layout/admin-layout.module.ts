import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { HomeComponent } from "../../pages/home/home.component";
import { RatesComponent } from "../../pages/rates/rates.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TransactionComponent } from "../../pages/transaction/transaction.component";
import { SliderModule } from 'angular-image-slider';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    SliderModule
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    TablesComponent,
    RatesComponent,
    TransactionComponent,
    NotificationsComponent,
    MapComponent
  ]
})
export class AdminLayoutModule {}
