import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentListComponent } from './content-list/content-list.component';
import { RouterModule,Routes } from '@angular/router';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/content",
    pathMatch:"full",
  },
  {
    path:"content",
    component: ContentListComponent,
  },
  {
    path:"content/:id",
    component: ContentDetailComponent,
  },
  { path: 'content', loadChildren: () => import('./content/content.module').then(m => m.ContentModule) },
  {
    path:"**",
    component: PageNotFoundComponent,
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
