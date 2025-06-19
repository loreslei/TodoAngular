import { Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home Page' }, // Default route
  { path: 'listar/componentes/:id', component: HomeComponent, title: 'Home Page' }, // Default route
  { path: '**', component: NotfoundComponent, title: 'Not Found' }, // Wildcard route for 404
];
