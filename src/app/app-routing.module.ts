import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {AddNewItemComponent} from "./screen/add-new-item/add-new-item.component";
import {IndexComponent} from "./shared/page/index/index.component";

const routes: Routes = [
  {
    path: '**',
    component: AddNewItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
