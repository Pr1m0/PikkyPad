import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MemorygameComponent } from './game/memorygame/memorygame.component';
import { AboutComponent } from './about/about.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [

    {path: '', component:HomeComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'login', component:LoginComponent},
    {path: 'home', component:HomeComponent},
    {path:'memorygame', component:MemorygameComponent, canActivate:[authGuard]},
    {path: 'about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}

