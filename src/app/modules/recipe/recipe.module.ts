import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MainViewComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    SharedModule
  ]
})
export class RecipeModule { }
