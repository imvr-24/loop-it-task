import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultsComponent } from './search-results/search-results.component';
import { DetailsComponent } from './search-results/details/details.component';


const routes: Routes = [
  {
    path: '',
    component: SearchResultsComponent
  },
  {
    path: 'srch/:id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
