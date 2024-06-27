import { Routes } from '@angular/router';
import { HomeComponent } from './core/layouts/home/home.component';
import { ShopComponent } from './core/layouts/shop/shop.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "shop",
        component: ShopComponent
    }
];
