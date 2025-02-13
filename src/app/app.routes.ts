import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { SessaoComponent } from './componentes/sessao/sessao.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'sessao',
    component: SessaoComponent,
  },
];
