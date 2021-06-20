import { Routes } from "@angular/router";

import { HomeComponent } from "../../pages/home/home.component";
import { RatesComponent } from "../../pages/rates/rates.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TransactionComponent } from "../../pages/transaction/transaction.component";

export const AdminLayoutRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "rates", component: RatesComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "transaction", component: TransactionComponent }
];
