import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'professor-login',
    loadChildren: () => import('./professor-login/professor-login.module').then(m => m.ProfessorLoginPageModule)
  },
  {
    path: 'home-aluno',
    loadChildren: () => import('./home-student/home-student.module').then( m => m.HomeStudentPageModule)
  },
  {
    path: 'aluno-login',
    loadChildren: () => import('./student-login/student-login.module').then( m => m.StudentLoginPageModule)
  },
  {
    path: 'aluno-professores',
    loadChildren: () => import('./student-professors/student-professors.module').then( m => m.StudentProfessorsPageModule)
  },
  {
    path: 'cadastro-aluno',
    loadChildren: () => import('./register-student/register-student.module').then( m => m.RegisterStudentPageModule)
  },
  {
    path: 'coordenador-login',
    loadChildren: () => import('./coordinator-login/coordinator-login.module').then( m => m.CoordinatorLoginPageModule)
  },
  {
    path: 'home-coordenador',
    loadChildren: () => import('./home-coordinator/home-coordinator.module').then( m => m.HomeCoordinatorPageModule)
  },
  {
    path: 'coordenador-professores',
    loadChildren: () => import('./coordinator-professors/coordinator-professors.module').then( m => m.CoordinatorProfessorsPageModule)
  },
  {
    path: 'coordenador-cadastro-professores',
    loadChildren: () => import('./coordinator-register-professors/coordinator-register-professors.module').then( m => m.CoordinatorRegisterProfessorsPageModule)
  },
  {
    path: 'coordenador-disciplina',
    loadChildren: () => import('./coordinator-discipline/coordinator-discipline.module').then( m => m.CoordinatorDisciplinePageModule)
  },
  {
    path: 'coordenador-cadastro-disciplina',
    loadChildren: () => import('./coordinator-register-discipline/coordinator-register-discipline.module').then( m => m.CoordinatorRegisterDisciplinePageModule)
  }





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
