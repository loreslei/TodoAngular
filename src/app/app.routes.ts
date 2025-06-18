import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
  { path: '', component: AppComponent, title: 'Home Page' }, // Default route
  { path: '**', component: NotfoundComponent, title: 'Page Not Found' }, // Wildcard route for 404
];
