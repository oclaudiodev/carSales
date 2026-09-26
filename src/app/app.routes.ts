import { Routes } from '@angular/router';
import { LadingPage } from './pages/lading-page/lading-page';
import { Carrinho } from './pages/carrinho/carrinho';

export const routes: Routes = [
    {path: '', component: LadingPage},
    {path: 'carrinho', component: Carrinho}
];
