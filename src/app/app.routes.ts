import { Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home Page' }, 
  { path: 'listar/componentes/:id', component: HomeComponent, title: 'Home Page' }, 
  { path: '**', component: NotfoundComponent, title: 'Not Found' }, 
];
