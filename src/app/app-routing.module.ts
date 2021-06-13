import { TodoListComponent } from './todo-list/todo-list.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { ExamplesComponent } from './examples/examples.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'router', component: RouterModule},
  { path: 'ornek',        component: ExamplesComponent },
  { path: 'yonlendir',        component: RouterModule },
  { path: 'footer',        component: FooterComponent },
  { path: 'index',        component: IndexComponent },
  { path: 'register',   component:RegisterComponent},
  { path: 'todoList',   component:TodoListComponent},
  { path: '',   redirectTo: 'index', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}