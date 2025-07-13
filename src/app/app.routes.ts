import type { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GamevsbotComponent } from './gamevsbot/gamevsbot.component';
import { LocalgameComponent } from './localgame/localgame.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'vsbot',
    component: GamevsbotComponent,
  },
  {
    path: 'local',
    component: LocalgameComponent,
  },
];
