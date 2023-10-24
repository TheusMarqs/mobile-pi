import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'aluno-login',
    loadChildren: () => import('./aluno-login/aluno-login.module').then( m => m.AlunoLoginPageModule)
  },
  {
    path: 'coordenador-login',
    loadChildren: () => import('./coordenador-login/coordenador-login.module').then( m => m.CoordenadorLoginPageModule)
  },
  {
    path: 'professor-login',
    loadChildren: () => import('./professor-login/professor-login.module').then( m => m.ProfessorLoginPageModule)
  },
  {
    path: 'cadastro-aluno',
    loadChildren: () => import('./cadastro-aluno/cadastro-aluno.module').then( m => m.CadastroAlunoPageModule)
  },
  {
    path: 'home-aluno',
    loadChildren: () => import('./home-aluno/home-aluno.module').then( m => m.HomeAlunoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
