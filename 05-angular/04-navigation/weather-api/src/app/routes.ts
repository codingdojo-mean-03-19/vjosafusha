import { SeatleComponent } from './seatle/seatle.component';
import { SanHoseComponent } from './san-hose/san-hose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { WashingtonComponent } from './washington/washington.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'seatle',
    component: SeatleComponent,
  },

  {
    path: 'sanHose',
    component: SanHoseComponent,
  },

  {
    path: 'burbank',
    component: BurbankComponent,
  },
  {
    path: 'dallas',
    component: DallasComponent,
  },
  {
    path: 'washington',
    component: WashingtonComponent,
  },
  {
    path: 'chicago',
    component: ChicagoComponent,
  },
];

export const routing = RouterModule.forRoot(routes);
