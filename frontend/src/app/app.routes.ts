import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'veiculos', pathMatch: 'full' },
  {
    path: 'veiculos',
    canActivate: [AuthGuard],
    loadComponent: () => import('./features/veiculos/veiculo-list/veiculo-list.component').then(m => m.VeiculoListComponent)
  }
];
