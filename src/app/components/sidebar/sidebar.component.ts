import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/home",
    title: "Home",
    icon: "icon-bank",
    class: ""
  },
 {
    path: "/tables",
    title: "Customer Details",
    icon: "icon-bullet-list-67",
    class: ""
  },
  {
    path: "/user",
    title: "Customer Information",
    icon: "icon-single-02",
    class: ""
  },
  {
      path: "/transaction",
      title: "Transaction",
      icon: "icon-align-center",
      class: ""
    },
    {
        path: "/notifications",
        title: "Notifications",
        icon: "icon-bell-55",
        class: ""
     },
    {
        path: "/rates",
        title: "Rates",
        icon: "icon-coins",
        class: ""
    },
    {
          path: "/rates",
          title: "About Us",
          icon: "icon-align-center",
          class: ""
    }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
