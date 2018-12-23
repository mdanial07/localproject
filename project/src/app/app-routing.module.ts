import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  TemplateLayout,
  HomePage,
  Profile,
  NewPost,
  EditProfile,
  Filter,
  ManiFest,
  RedSpeckledKidneyBeans,
  GrainBazar,
  Blogs,
} from './Component'

const routes: Routes = [
  {
    path: '', component: TemplateLayout,
    children: [
      { path: '', component: HomePage },
      { path: 'profile', component: Profile },
      { path: 'grainbazar', component: GrainBazar },
      { path: 'manifest', component: ManiFest },
      { path: 'blogs', component: Blogs },
    ]
  },
  { path: 'redspeckledkidneybeans', component: RedSpeckledKidneyBeans },
  { path: 'newpost', component: NewPost },
  { path: 'filter', component: Filter },
  { path: 'edit', component: EditProfile },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
