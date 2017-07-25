import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteListComponent } from './note-list/note-list.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', pathMatch: "full", component: AppComponent },
  // { path: '', pathMatch: "full", redirectTo: "/"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
