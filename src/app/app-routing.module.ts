import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormGeneratorComponent } from './components/form-generator/form-generator.component';

const routes: Routes = [{
  path: '',
  component: FormGeneratorComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
