import { Routes } from '@angular/router';
import { Search } from './pages/search/search';
import { SearchResult } from './pages/search-result/search-result';
import { MyBookings } from './pages/my-bookings/my-bookings';
import { BookTicket } from './pages/book-ticket/book-ticket';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Welcome } from './pages/welcome/welcome';
export const routes: Routes = [
  { path: '', component: Welcome },
  { path: 'home', component: Welcome },
  { path: 'search', component: Search },
  { path: 'search-result', component: SearchResult },
  { path: 'my-bookings', component: MyBookings },
  { path: 'book-ticket', component: BookTicket },
  { path: 'login', component: Login },
  { path: 'register', component: Register }
];
