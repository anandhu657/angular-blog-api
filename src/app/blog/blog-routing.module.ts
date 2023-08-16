import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBlogComponent } from './components/list-blog/list-blog.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';

const routes: Routes = [
  {
    path:"",
    component:ListBlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
