import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistViewComponent } from './components/playlist-view/playlist-view.component';

const routes: Routes = [
  {
    path: '',
    component: PlaylistViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
