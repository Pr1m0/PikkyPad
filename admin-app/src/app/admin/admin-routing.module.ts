import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ChildrensComponent } from './childrens/childrens.component';

const routes: Routes = [
  
  
  { path: '', component: AdminComponent,
    
    children:[
      {path:'',component:HomeComponent},
      {path:'adduser',component:AdduserComponent},
      {path:'childrens',component:ChildrensComponent}

    ] }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
