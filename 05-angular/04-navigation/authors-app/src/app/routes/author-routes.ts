import { HomeComponent } from '../author/home/home.component';
import { NewComponent } from '../author/new/new.component';
import { AddComponent } from '../author/add/add.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'edit',
    component: NewComponent,
  },
  {
    path: 'add',
    component: AddComponent,
  },
];
export const routing = RouterModule.forRoot(routes);
