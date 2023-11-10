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
  },
  {
    path: 'coordenador-sala',
    loadChildren: () => import('./coordinator-classroom/coordinator-classroom.module').then( m => m.CoordinatorClassroomPageModule)
  },
  {
    path: 'coordenador-cadastro-sala',
    loadChildren: () => import('./coordinator-register-classroom/coordinator-register-classroom.module').then( m => m.CoordinatorRegisterClassroomPageModule)
  },
  {
    path: 'home-professor',
    loadChildren: () => import('./home-professor/home-professor.module').then( m => m.HomeProfessorPageModule)
  },
  {
    path: 'coordenador-curso',
    loadChildren: () => import('./coordinator-course/coordinator-course.module').then( m => m.CoordinatorCoursePageModule)
  },
  {
    path: 'coordenador-cadastro-curso',
    loadChildren: () => import('./coordinator-register-course/coordinator-register-course.module').then( m => m.CoordinatorRegisterCoursePageModule)
  },
  {
    path: 'coordenador-cadastro-turmas',
    loadChildren: () => import('./coordinator-register-team/coordinator-register-team.module').then( m => m.CoordinatorRegisterTeamPageModule)
  },
  {
    path: 'coordenador-turmas',
    loadChildren: () => import('./coordinator-team/coordinator-team.module').then( m => m.CoordinatorTeamPageModule)
  }









];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
