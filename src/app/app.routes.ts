import { Routes } from '@angular/router';
import { Search } from './pages/search/search';
import { SearchResult } from './pages/search-result/search-result';
import { MyBookings } from './pages/my-bookings/my-bookings';
import { BookTicket } from './pages/book-ticket/book-ticket';
import { Login } from './pages/login/login';

export const routes: Routes = [
    {
        path: "",
        redirectTo : "search",
        pathMatch : "full"
    }
    ,{
        path: "search",
        component:Search
    }
    ,
    {
        path : "search-result",
         component:SearchResult  
    }
    ,{
        path : "my-bookings",
        component:MyBookings
    }
    ,{
        path : "book-ticket",
        component:BookTicket
    }
    ,{
        path : "login",
        component:Login
    }
];
